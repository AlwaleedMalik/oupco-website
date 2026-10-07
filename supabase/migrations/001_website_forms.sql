-- OUPCO website forms
-- Run once in Supabase → SQL Editor.
-- The website uses the public anon key, so RLS allows INSERT only:
-- visitors can submit, but nobody can read/update/delete rows with that key.

create extension if not exists citext;

-- ── Contact / quote requests ────────────────────────────────────────────
create table if not exists public.contact_requests (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  status           text not null default 'new' check (status in ('new', 'in_progress', 'quoted', 'won', 'lost', 'spam')),
  name             text not null check (char_length(name) between 2 and 120),
  company          text not null check (char_length(company) between 1 and 160),
  email            citext not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 254),
  phone            text check (char_length(phone) <= 40),
  interest         text not null check (char_length(interest) <= 120),
  message          text not null check (char_length(message) between 2 and 5000),
  frame_agreement  boolean not null default false,
  page             text check (char_length(page) <= 200),
  locale           text not null default 'en' check (locale in ('en', 'ar'))
);

-- ── Supplier applications ───────────────────────────────────────────────
create table if not exists public.supplier_applications (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  status         text not null default 'new' check (status in ('new', 'reviewing', 'approved', 'rejected', 'spam')),
  company        text not null check (char_length(company) between 1 and 160),
  cr             text not null check (char_length(cr) between 5 and 20),
  vat            text check (char_length(vat) <= 20),
  category       text not null check (char_length(category) <= 120),
  region         text not null check (char_length(region) <= 80),
  website        text check (char_length(website) <= 300),
  name           text not null check (char_length(name) between 2 and 120),
  role           text check (char_length(role) <= 120),
  email          citext not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 254),
  phone          text not null check (char_length(phone) <= 40),
  about          text check (char_length(about) <= 5000),
  local_content  boolean not null default false,
  page           text check (char_length(page) <= 200),
  locale         text not null default 'en' check (locale in ('en', 'ar'))
);

create index if not exists contact_requests_created_idx on public.contact_requests (created_at desc);
create index if not exists supplier_applications_created_idx on public.supplier_applications (created_at desc);

-- ── Row Level Security: insert-only for the public website ──────────────
alter table public.contact_requests enable row level security;
alter table public.supplier_applications enable row level security;

drop policy if exists "website can submit" on public.contact_requests;
create policy "website can submit" on public.contact_requests
  for insert to anon with check (status = 'new');

drop policy if exists "website can submit" on public.supplier_applications;
create policy "website can submit" on public.supplier_applications
  for insert to anon with check (status = 'new');

-- No select/update/delete policies for anon → those are denied.
-- Your team reads the data in the Supabase dashboard (or with the service role in n8n).
revoke all on public.contact_requests, public.supplier_applications from anon;
grant insert on public.contact_requests, public.supplier_applications to anon;
