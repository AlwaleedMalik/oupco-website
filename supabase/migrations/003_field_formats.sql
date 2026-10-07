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
