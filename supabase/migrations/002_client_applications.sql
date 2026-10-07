-- Business account applications (website "Apply now").
-- Flow: apply → review → contract & SLA sent → signed → access to oupco.app
-- Run in Supabase → SQL Editor after 001_website_forms.sql.

create table if not exists public.client_applications (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  status           text not null default 'new'
                   check (status in ('new', 'reviewing', 'contract_sent', 'signed', 'active', 'rejected', 'spam')),
  company          text not null check (char_length(company) between 1 and 160),
  cr               text not null check (char_length(cr) between 5 and 20),
  vat              text check (char_length(vat) <= 20),
  sector           text not null check (char_length(sector) <= 120),
  company_size     text not null check (char_length(company_size) <= 60),
  main_need        text not null check (char_length(main_need) <= 120),
  monthly_spend    text check (char_length(monthly_spend) <= 60),
  name             text not null check (char_length(name) between 2 and 120),
  role             text check (char_length(role) <= 120),
  email            citext not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 254),
  phone            text not null check (char_length(phone) <= 40),
  notes            text check (char_length(notes) <= 5000),
  frame_agreement  boolean not null default false,
  page             text check (char_length(page) <= 200),
  locale           text not null default 'en' check (locale in ('en', 'ar'))
);

create index if not exists client_applications_created_idx on public.client_applications (created_at desc);
create index if not exists client_applications_status_idx on public.client_applications (status);

alter table public.client_applications enable row level security;

drop policy if exists "website can submit" on public.client_applications;
create policy "website can submit" on public.client_applications
  for insert to anon with check (status = 'new');

revoke all on public.client_applications from anon;
grant insert on public.client_applications to anon;
