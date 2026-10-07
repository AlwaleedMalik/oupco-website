// Language-neutral company details. All translatable copy lives in src/i18n/en.ts and ar.ts.

export const site = {
  name: "OUPCO",
  founded: "2023",
  url: "https://oupco.com",
  loginUrl: "https://oupco.app",
  email: "info@oupco.com",
  phone: "+966 56 700 7146",
  whatsapp: "+966 56 700 7146",
  crNumber: "7034498852",
  vatNumber: "314500935500003",
  cr: "CR 7034498852",
  vat: "VAT 314500935500003",
};

export const telHref = `tel:${site.phone.replace(/\s/g, "")}`;
export const waNumber = site.whatsapp.replace(/\D/g, "");
