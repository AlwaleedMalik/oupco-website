# Website forms → Supabase → n8n → Brevo

```
Visitor submits form (Apply / Contact / Supplier)
  → Supabase (row saved: client_applications / contact_requests / supplier_applications)
  → Supabase Database Webhook (on INSERT)
  → n8n workflow "OUPCO website forms → Brevo"
  → Brevo: confirmation to the visitor + alert to alwaleed@oupco.com (testing — switch to the team inbox later)
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
1. Senders & IPs → add and verify `no-reply@oupco.com` (or the sender you prefer) and authenticate the oupco.com domain (DKIM/DMARC).
2. SMTP & API → create an **API key**.

## 3. n8n
1. Workflows → Import from file → `integrations/n8n-website-forms.json`.
2. **Supabase insert webhook** node → Credential: *Header Auth*
   - Name: `x-webhook-secret`  Value: a long random string (keep it for step 4).
3. **Send via Brevo** node → Credential: *Header Auth*
   - Name: `api-key`  Value: your Brevo API key.
4. Activate the workflow and copy its **Production URL**.
5. To change the sender or the team recipients, edit `SENDER` / `TEAM` at the top of the **Build emails** node.

## 4. Supabase → n8n
Database → Webhooks → Create (one for each table, or one per table with the same settings):
- Table: `client_applications` (then repeat for `contact_requests` and `supplier_applications`)
- Events: **Insert**
- Type: HTTP Request, POST, URL = the n8n Production URL
- HTTP Header: `x-webhook-secret` = the same secret from step 3.2

## 5. Test
Submit all three forms (Apply, Contact, Supplier) → check the rows in Table Editor → check both inboxes.

Spam protection today: a honeypot field plus database length/format checks.
Cloudflare Turnstile can be added later if spam shows up.
