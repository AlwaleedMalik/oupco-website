# Website forms → Supabase → n8n → Brevo

```
Visitor submits form (Apply / Contact / Supplier)
  → Supabase (row saved: client_applications / contact_requests / supplier_applications)
  → Postgres trigger notify_n8n (on INSERT, async via pg_net, secret from Vault)
  → n8n workflow "OUPCO website forms → Brevo"
  → Brevo: confirmation to the visitor + alert to info@oupco.com (all from notifications@oupco.com)
```

The row is saved first, so nothing is lost if n8n or Brevo is temporarily down.

**Languages:** each row stores `locale` (`en` or `ar`). Submissions from the Arabic site (`/ar/…`) get an
Arabic, right-to-left confirmation email; the team notification stays in English and is prefixed `[AR]`.
Dropdown answers are always saved in English (e.g. "Healthcare"), whichever language the visitor used.

## 1. Supabase
1. SQL Editor → run `supabase/migrations/001_website_forms.sql`, then `002_client_applications.sql`, then `003_field_formats.sql`.
2. Project Settings → API → copy **Project URL** and **anon public** key.
3. In `site/`, copy `.env.example` to `.env` and paste both values.
   (Add the same two variables in your hosting provider when deploying.)

## 2. Brevo
1. Senders & IPs → `notifications@oupco.com` (sender) and `info@oupco.com` (reply-to) are verified; the oupco.com domain is authenticated.
2. SMTP & API → **API keys & MCP** → create an **API key** (starts with `xkeysib-`). An SMTP key will not work.
3. Security → Authorized IPs must include the n8n server (148.230.122.0/24 is allowed).

**DNS (Cloudflare):** every email record (`brevo1/brevo2._domainkey`, `_dmarc`, `mta-sts`) must be **DNS only** (grey cloud).
Proxied email records are invisible to mail servers. DMARC is hosted by EasyDMARC (`_dmarc` CNAME, currently `p=none`);
change the policy in EasyDMARC, not in DNS.

## 3. n8n
1. Workflows → Import from file → `integrations/n8n-import.json` (live workflow: "oupco.com", RyH1OwM3HXb1NjQb).
2. **Supabase insert webhook** node → Credential: *Header Auth*
   - Name: `x-webhook-secret`  Value: `N8N_WEBHOOK_SECRET` from `site/.env` (never commit it).
3. **Send via Brevo** node → Credential: *Header Auth*
   - Name: `api-key`  Value: your Brevo API key. Set Allowed HTTP Request Domains → `api.brevo.com`.
   - Make sure this node uses the Brevo credential, not the webhook one (n8n may auto-pick the first Header Auth).
4. Activate the workflow and copy its **Production URL**.
5. To change the sender or the team recipients, edit `SENDER` / `TEAM` at the top of the **Build emails** node.

## 4. Supabase → n8n
1. Integrations → Vault → add a secret named `n8n_webhook_secret` with the same value as step 3.2.
2. SQL Editor → run `supabase/migrations/004_form_notifications.sql` (one trigger per form table, POSTs to
   `https://n8n.srv1053552.hstgr.cloud/webhook/oupco-website-forms`). No Database Webhooks need to be created in the UI.

## 5. Test
Submit all three forms (Apply, Contact, Supplier) → check the rows in Table Editor → check both inboxes.

Spam protection today: a honeypot field plus database length/format checks.
Cloudflare Turnstile can be added later if spam shows up.
