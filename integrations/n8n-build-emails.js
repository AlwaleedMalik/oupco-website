// Builds the two Brevo emails (confirmation to the submitter + internal alert)
// from a Supabase Database Webhook payload: { type, table, record }.
// Submissions from Arabic pages (record.locale === 'ar') get an Arabic, right-to-left confirmation.
// The internal alert to the team is always English and flagged when the submission was in Arabic.
const SENDER = { name: 'OUPCO', email: 'info@oupco.com' }; // must be a verified sender in Brevo
const TEAM = [{ email: 'alwaleed@oupco.com', name: 'Alwaleed' }]; // testing: all 3 forms notify this inbox
const NAVY = '#142e45', TEAL = '#195e7f';

const body = $input.first().json.body || {};
if (body.type !== 'INSERT' || !body.record) return [];
const r = body.record;
const table = body.table;
const AR = r.locale === 'ar';

const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ref = String(r.id || '').slice(0, 8).toUpperCase();

// ── Copy ──────────────────────────────────────────────────────────────────
const L = {
  en: {
    yes: 'Yes', no: 'No',
    footer: 'OUPCO · Building No. 4136, Al Ezdihar District, Riyadh 12486',
    thanks: (n) => `Thank you, ${n}`,
    labels: {
      ref: 'Reference', name: 'Name', contact: 'Contact', company: 'Company', email: 'Email', phone: 'Phone', topic: 'Topic', message: 'Message',
      cr: 'CR number', vat: 'VAT number', category: 'Category', region: 'Coverage', website: 'Website', role: 'Job title', about: 'About',
      local: 'Local content', sector: 'Sector', size: 'Company size', need: 'Main need', spend: 'Monthly spend', frame: 'Frame agreement', notes: 'Notes',
    },
    contact: {
      subject: `We've received your message (Ref ${ref})`,
      p1: 'We have received your message and a member of our team will get back to you within one business day.',
      p2: 'Here is a copy of what you sent us:',
      p3: '<br>Need to add something? Simply reply to this email.',
    },
    supplier: {
      subject: `Your OUPCO supplier application (Ref ${ref})`,
      p1: (c) => `We have received the supplier application for <b>${c}</b>. Our vendor team reviews every application and will respond within 5 business days.`,
    },
    client: {
      subject: `Your OUPCO business account application (Ref ${ref})`,
      p1: (c) => `We have received the application for <b>${c}</b>.`,
      p2: `<b>What happens next:</b><br>1. Our team reviews your application and verifies your company.<br>2. We send you our service agreement and SLA to review and sign.<br>3. Once signed, your team receives access to <a href="https://oupco.app" style="color:${TEAL}">oupco.app</a>.`,
      p3: 'We will be in touch within 2 business days. Here is a copy of your application:',
    },
  },
  ar: {
    yes: 'نعم', no: 'لا',
    footer: 'OUPCO · مبنى رقم 4136، حي الازدهار، الرياض 12486',
    thanks: (n) => `شكراً لك، ${n}`,
    labels: {
      ref: 'الرقم المرجعي', name: 'الاسم', contact: 'مسؤول التواصل', company: 'الشركة', email: 'البريد الإلكتروني', phone: 'الجوال', topic: 'الموضوع', message: 'الرسالة',
      cr: 'رقم السجل التجاري', vat: 'الرقم الضريبي', category: 'الفئة', region: 'نطاق التغطية', website: 'الموقع الإلكتروني', role: 'المسمى الوظيفي', about: 'نبذة',
      local: 'محتوى محلي', sector: 'القطاع', size: 'حجم الشركة', need: 'الاحتياج الرئيسي', spend: 'الإنفاق الشهري', frame: 'اتفاقية إطارية', notes: 'ملاحظات',
    },
    contact: {
      subject: `تم استلام رسالتك (المرجع ${ref})`,
      p1: 'استلمنا رسالتك، وسيتواصل معك أحد أعضاء فريقنا خلال يوم عمل واحد.',
      p2: 'هذه نسخة مما أرسلته إلينا:',
      p3: '<br>هل تريد إضافة شيء؟ يكفي الرد على هذا البريد.',
    },
    supplier: {
      subject: `طلب انضمامك كمورد لدى OUPCO (المرجع ${ref})`,
      p1: (c) => `استلمنا طلب الانضمام كمورد الخاص بـ <b>${c}</b>. يراجع فريق الموردين كل طلب ويرد خلال 5 أيام عمل.`,
    },
    client: {
      subject: `طلب حساب الأعمال لدى OUPCO (المرجع ${ref})`,
      p1: (c) => `استلمنا طلب <b>${c}</b>.`,
      p2: `<b>الخطوات التالية:</b><br>1. يراجع فريقنا طلبك ويتحقق من بيانات شركتك.<br>2. نرسل لك اتفاقية الخدمة واتفاقية مستوى الخدمة لمراجعتها وتوقيعها.<br>3. بعد التوقيع، يحصل فريقك على صلاحية الدخول إلى <a href="https://oupco.app" style="color:${TEAL}">oupco.app</a>.`,
      p3: 'سنتواصل معك خلال يومي عمل. هذه نسخة من طلبك:',
    },
  },
};

// ── Building blocks ───────────────────────────────────────────────────────
const fmt = (v, lang) => (v === true ? L[lang].yes : v === false ? L[lang].no : v);
const row = (k, v, lang) => v === undefined || v === null || v === ''
  ? ''
  : `<tr><td style="padding:8px 12px;color:#55606b;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:8px 12px;color:#101010">${bidi(esc(fmt(v, lang)).replace(/\n/g, '<br>'), fmt(v, lang))}</td></tr>`;
// Latin/number values (phones, emails, CR, English option values) stay left-to-right inside Arabic emails
const bidi = (html, raw) => (/^[\x00-\x7F–—]*$/.test(String(raw)) ? `<span dir="ltr">${html}</span>` : `<span dir="auto">${html}</span>`);
const table_ = (rows) => `<table cellpadding="0" cellspacing="0" style="width:100%;border:1px solid #dfdddc;border-radius:8px;font-size:14px">${rows}</table>`;
const p = (t, lang) => `<p style="margin:0 0 16px;font-size:15px;line-height:${lang === 'ar' ? '1.9' : '1.6'};color:#101010">${t}</p>`;
const layout = (title, inner, lang) => {
  const rtl = lang === 'ar';
  const font = rtl ? "Tahoma,'Segoe UI',Arial,sans-serif" : 'Arial,Helvetica,sans-serif';
  return `<!doctype html><html lang="${lang}" dir="${rtl ? 'rtl' : 'ltr'}"><body style="margin:0;background:#f6f5f3;font-family:${font}"><table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f5f3;padding:24px 12px"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" dir="${rtl ? 'rtl' : 'ltr'}" style="max-width:600px;width:100%;background:#fff;border-radius:12px;overflow:hidden;text-align:${rtl ? 'right' : 'left'}"><tr><td dir="ltr" style="background:${NAVY};padding:24px 32px;color:#fff;font-size:22px;font-weight:bold;letter-spacing:1px;text-align:${rtl ? 'right' : 'left'}">OUPCO<span style="color:#7fbfdc">.</span></td></tr><tr><td style="padding:32px"><h1 style="margin:0 0 16px;font-size:22px;color:${NAVY}">${title}</h1>${inner}</td></tr><tr><td style="padding:20px 32px;background:#f6f5f3;color:#55606b;font-size:12px">${L[lang].footer} · <a href="https://oupco.com${rtl ? '/ar' : ''}" style="color:${TEAL}">oupco.com</a></td></tr></table></td></tr></table></body></html>`;
};
// Detail table for a given language: [labelKey, value] pairs
const details = (pairs, lang) => table_(pairs.map(([k, v]) => row(L[lang].labels[k], v, lang)).join(''));

const visitorLang = AR ? 'ar' : 'en';
const arBadge = AR ? p('<span style="display:inline-block;padding:4px 10px;border-radius:999px;background:#e3f0f6;color:#195e7f;font-weight:bold">Arabic submission · reply in Arabic</span>', 'en') : '';
const flag = AR ? '[AR] ' : '';
// Visitor replies go to the sender (info@oupco.com); team alerts reply straight to the customer
const visitor = (subject, html) => ({ sender: SENDER, to: [{ email: r.email, name: r.name }], subject, htmlContent: html });
const team = (subject, html) => ({ sender: SENDER, to: TEAM, replyTo: { email: r.email, name: r.name }, subject: flag + subject, htmlContent: html });

let emails = [];

if (table === 'contact_requests') {
  const pairs = [['ref', ref], ['name', r.name], ['company', r.company], ['email', r.email], ['phone', r.phone], ['topic', r.interest], ['message', r.message]];
  const c = L[visitorLang].contact;
  emails.push(visitor(c.subject, layout(L[visitorLang].thanks(esc(r.name)), p(c.p1, visitorLang) + p(c.p2, visitorLang) + details(pairs, visitorLang) + p(c.p3, visitorLang), visitorLang)));
  emails.push(team(`New website enquiry: ${r.company} · ${r.interest}`, layout('New website enquiry', arBadge + p(`Submitted from <b>${esc(r.page || 'website')}</b>. Reply to this email to answer the customer directly.`, 'en') + details(pairs, 'en'), 'en')));
}

if (table === 'supplier_applications') {
  const localBadge = r.local_content
    ? '<span style="display:inline-block;padding:4px 10px;border-radius:999px;background:#e5f3ec;color:#1d7649;font-weight:bold">Local content: YES</span>'
    : '<span style="display:inline-block;padding:4px 10px;border-radius:999px;background:#f6f5f3;color:#55606b;font-weight:bold">Local content: No (import / resell)</span>';
  const pairs = [['ref', ref], ['company', r.company], ['cr', r.cr], ['vat', r.vat], ['category', r.category], ['region', r.region], ['website', r.website], ['contact', r.name], ['role', r.role], ['email', r.email], ['phone', r.phone], ['about', r.about]];
  const c = L[visitorLang].supplier;
  emails.push(visitor(c.subject, layout(L[visitorLang].thanks(esc(r.name)), p(c.p1(esc(r.company)), visitorLang) + details([...pairs, ['local', r.local_content]], visitorLang), visitorLang)));
  emails.push(team(`New supplier application: ${r.company} (${r.category})${r.local_content ? ' · LOCAL CONTENT' : ''}`, layout('New supplier application', arBadge + p(localBadge, 'en') + details(pairs, 'en'), 'en')));
}

if (table === 'client_applications') {
  const pairs = [['ref', ref], ['company', r.company], ['cr', r.cr], ['vat', r.vat], ['sector', r.sector], ['size', r.company_size], ['need', r.main_need], ['spend', r.monthly_spend], ['frame', r.frame_agreement], ['contact', r.name], ['role', r.role], ['email', r.email], ['phone', r.phone], ['notes', r.notes]];
  const c = L[visitorLang].client;
  emails.push(visitor(c.subject, layout(L[visitorLang].thanks(esc(r.name)), p(c.p1(esc(r.company)), visitorLang) + p(c.p2, visitorLang) + p(c.p3, visitorLang) + details(pairs, visitorLang), visitorLang)));
  emails.push(team(`New business account application: ${r.company} (${r.sector})`, layout('New business account application', arBadge + p('Next step: review and send the contract + SLA. Update the status in Supabase as it progresses (reviewing → contract_sent → signed → active).', 'en') + details(pairs, 'en'), 'en')));
}

return emails.map((payload) => ({ json: { payload } }));
