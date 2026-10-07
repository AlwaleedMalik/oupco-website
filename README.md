# oupco.com

Marketing website for OUPCO, a Saudi B2B procurement platform. English at `/`, Arabic (RTL) at `/ar/`.

Built with [Astro](https://astro.build) + Tailwind CSS v4 as a static site, hosted on Cloudflare Pages.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

Requires Node 22.12+ (see `.node-version`).

## Where things live

| What | Where |
|---|---|
| All page copy, English | `src/i18n/en.ts` |
| All page copy, Arabic | `src/i18n/ar.ts` (must mirror en.ts; the build fails if a key is missing) |
| Contact details, CR/VAT, URLs | `src/data/site.ts` |
| Form validation rules | `src/data/validation.ts` |
| Pages (one template → `/x` and `/ar/x`) | `src/pages/[...lang]/` |
| Logos | `src/assets/` (clients, suppliers, brands) |

Copy marked `PLACEHOLDER` is unconfirmed and should be checked before relying on it.

## Forms

Forms post directly to Supabase (insert-only via Row Level Security). Configuration:

- `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY`: in `.env` locally (copy `.env.example`), and as
  environment variables in Cloudflare Pages for production. Never use the service_role / secret key.
- Database setup: `supabase/setup_all.sql`, then check with `supabase/verify_setup.sql`.
- Email notifications (Supabase webhook → n8n → Brevo): see `integrations/FORMS_SETUP.md`.

## Deploy

Pushes to `main` deploy automatically via Cloudflare Pages (build command `npm run build`, output `dist`).
