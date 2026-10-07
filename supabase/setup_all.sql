-- ================================================================
-- OUPCO website forms: complete setup (001 + 002 + 003 combined)
-- Paste this whole file into Supabase → SQL Editor → New query → Run.
-- Safe to re-run: every step uses IF EXISTS / IF NOT EXISTS.
-- ================================================================

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


-- Stricter field formats, matching the website rules in src/data/validation.ts.
-- Run after 001 and 002. Safe to re-run.
--   phone : Saudi mobile, stored as +9665XXXXXXXX (required on all forms)
--   cr    : exactly 10 digits
--   vat   : 15 digits, starts and ends with 3 (optional)
--   email : required, basic format check

-- ── contact_requests ────────────────────────────────────────────────────
alter table public.contact_requests drop constraint if exists contact_requests_phone_check;
alter table public.contact_requests drop constraint if exists contact_requests_email_check;
alter table public.contact_requests alter column phone set not null;
alter table public.contact_requests
  add constraint contact_requests_phone_check check (phone ~ '^\+9665[0-9]{8}$'),
  add constraint contact_requests_email_check check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$' and char_length(email) <= 254);

-- ── client_applications ─────────────────────────────────────────────────
alter table public.client_applications drop constraint if exists client_applications_phone_check;
alter table public.client_applications drop constraint if exists client_applications_email_check;
alter table public.client_applications drop constraint if exists client_applications_cr_check;
alter table public.client_applications drop constraint if exists client_applications_vat_check;
alter table public.client_applications
  add constraint client_applications_phone_check check (phone ~ '^\+9665[0-9]{8}$'),
  add constraint client_applications_email_check check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$' and char_length(email) <= 254),
  add constraint client_applications_cr_check check (cr ~ '^[0-9]{10}$'),
  add constraint client_applications_vat_check check (vat is null or vat ~ '^3[0-9]{13}3$');

-- ── supplier_applications ───────────────────────────────────────────────
alter table public.supplier_applications drop constraint if exists supplier_applications_phone_check;
alter table public.supplier_applications drop constraint if exists supplier_applications_email_check;
alter table public.supplier_applications drop constraint if exists supplier_applications_cr_check;
alter table public.supplier_applications drop constraint if exists supplier_applications_vat_check;
alter table public.supplier_applications
  add constraint supplier_applications_phone_check check (phone ~ '^\+9665[0-9]{8}$'),
  add constraint supplier_applications_email_check check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$' and char_length(email) <= 254),
  add constraint supplier_applications_cr_check check (cr ~ '^[0-9]{10}$'),
  add constraint supplier_applications_vat_check check (vat is null or vat ~ '^3[0-9]{13}3$');
