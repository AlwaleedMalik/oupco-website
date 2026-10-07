-- Email notifications for the website forms.
-- Every new row in the 3 form tables is POSTed to n8n, which builds the emails and sends them via Brevo.
-- The body matches Supabase's Database Webhook payload: { type, table, schema, record, old_record }.
--
-- Before running: Integrations → Vault → add a secret named  n8n_webhook_secret
-- (the same value as the n8n "x-webhook-secret" Header Auth credential). It never appears in this file.
-- Run in Supabase → SQL Editor after 003_field_formats.sql.

create extension if not exists pg_net with schema extensions;

create or replace function public.notify_form_submission()
returns trigger
language plpgsql
security definer          -- inserts come from the anon role, which can't read Vault
set search_path = ''
as $$
declare
  secret text;
begin
  select decrypted_secret into secret from vault.decrypted_secrets where name = 'n8n_webhook_secret' limit 1;
  if secret is null then
    raise warning 'notify_form_submission: Vault secret n8n_webhook_secret is missing, email not sent';
    return new;
  end if;

  -- pg_net is asynchronous: the insert never waits for (or fails because of) n8n
  perform net.http_post(
    url     := 'https://n8n.srv1053552.hstgr.cloud/webhook/oupco-website-forms',
    body    := jsonb_build_object('type', tg_op, 'table', tg_table_name, 'schema', tg_table_schema, 'record', to_jsonb(new), 'old_record', null),
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-webhook-secret', secret),
    timeout_milliseconds := 5000
  );
  return new;
end;
$$;

revoke all on function public.notify_form_submission() from public, anon, authenticated;

drop trigger if exists notify_n8n on public.contact_requests;
create trigger notify_n8n after insert on public.contact_requests
  for each row execute function public.notify_form_submission();

drop trigger if exists notify_n8n on public.supplier_applications;
create trigger notify_n8n after insert on public.supplier_applications
  for each row execute function public.notify_form_submission();

drop trigger if exists notify_n8n on public.client_applications;
create trigger notify_n8n after insert on public.client_applications
  for each row execute function public.notify_form_submission();
