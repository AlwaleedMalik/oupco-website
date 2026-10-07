// Validation rules shared by every form field (checked in FormEnhance with the `u` flag).
// Keep the phone / CR / VAT rules in sync with supabase/migrations/003_field_formats.sql.

type Msg = { en: string; ar: string };

export type Rule = {
  pattern: string;
  message: Msg;
  digits?: boolean; // strip non-digits as the user types (also converts Arabic-Indic numerals)
  maxlength?: number;
  minlength?: number;
  inputmode?: "text" | "numeric" | "email" | "url" | "tel";
  autocapitalize?: "off" | "words";
  ltr?: boolean; // emails, URLs and numbers stay left-to-right on Arabic pages
};

export const rules = {
  name: {
    pattern: "^[\\p{L}\\p{M}][\\p{L}\\p{M} .'\\-]{1,79}$",
    message: { en: "Please use letters only (at least 2 characters).", ar: "يرجى استخدام الحروف فقط (حرفان على الأقل)." },
    maxlength: 80,
    autocapitalize: "words",
  },
  jobTitle: {
    pattern: "^[\\p{L}\\p{M}][\\p{L}\\p{M} .'&/\\-]{1,79}$",
    message: { en: "Please use letters only.", ar: "يرجى استخدام الحروف فقط." },
    maxlength: 80,
  },
  company: {
    pattern: "^[\\p{L}\\p{M}\\p{N}][\\p{L}\\p{M}\\p{N} .,'&()/\\-]{1,119}$",
    message: { en: "Please enter a valid company name.", ar: "يرجى إدخال اسم شركة صحيح." },
    maxlength: 120,
  },
  email: {
    pattern: "^[A-Za-z0-9._%+\\-]+@[A-Za-z0-9.\\-]+\\.[A-Za-z]{2,}$",
    message: { en: "Please enter a valid work email, e.g. name@company.com", ar: "يرجى إدخال بريد إلكتروني صحيح للعمل، مثل name@company.com" },
    maxlength: 254,
    inputmode: "email",
    autocapitalize: "off",
    ltr: true,
  },
  // Saudi mobile: user types the 9 digits after the fixed "+966" prefix (starts with 5)
  phoneSa: {
    pattern: "^5[0-9]{8}$",
    message: { en: "Enter a Saudi mobile number: 9 digits starting with 5, e.g. 512345678.", ar: "أدخل رقم جوال سعودي من 9 أرقام يبدأ بالرقم 5، مثل 512345678." },
    digits: true,
    maxlength: 9,
    inputmode: "numeric",
    ltr: true,
  },
  cr: {
    pattern: "^[0-9]{10}$",
    message: { en: "CR number must be exactly 10 digits.", ar: "يجب أن يتكون رقم السجل التجاري من 10 أرقام." },
    digits: true,
    maxlength: 10,
    inputmode: "numeric",
    ltr: true,
  },
  vat: {
    pattern: "^3[0-9]{13}3$",
    message: { en: "VAT number must be 15 digits, starting and ending with 3.", ar: "يجب أن يتكون الرقم الضريبي من 15 رقماً، يبدأ وينتهي بالرقم 3." },
    digits: true,
    maxlength: 15,
    inputmode: "numeric",
    ltr: true,
  },
  website: {
    pattern: "^(https?://)?([A-Za-z0-9\\-]+\\.)+[A-Za-z]{2,}(/\\S*)?$",
    message: { en: "Please enter a valid website, e.g. company.com", ar: "يرجى إدخال موقع إلكتروني صحيح، مثل company.com" },
    maxlength: 300,
    inputmode: "url",
    autocapitalize: "off",
    ltr: true,
  },
  message: {
    pattern: "^[\\s\\S]{10,}$",
    message: { en: "Please add a little more detail (at least 10 characters).", ar: "يرجى إضافة مزيد من التفاصيل (10 أحرف على الأقل)." },
    minlength: 10,
    maxlength: 2000,
  },
  longText: {
    pattern: "^[\\s\\S]{0,2000}$",
    message: { en: "Please keep this under 2,000 characters.", ar: "يرجى ألا يتجاوز النص 2,000 حرف." },
    maxlength: 2000,
  },
} satisfies Record<string, Rule>;

export type RuleName = keyof typeof rules;
