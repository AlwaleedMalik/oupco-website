import type { ImageMetadata } from "astro";

type Logo = { name: string; src: ImageMetadata };

const load = (files: Record<string, { default: ImageMetadata }>, names: Record<string, string>): Logo[] =>
  Object.entries(names).map(([file, name]) => {
    const match = Object.entries(files).find(([path]) => path.split("/").pop()!.startsWith(file + "."));
    if (!match) throw new Error(`Missing logo: ${file}`);
    return { name, src: match[1].default };
  });

const clientFiles = import.meta.glob<{ default: ImageMetadata }>("../assets/clients/*", { eager: true });
const supplierFiles = import.meta.glob<{ default: ImageMetadata }>("../assets/suppliers/*", { eager: true });
const brandFiles = import.meta.glob<{ default: ImageMetadata }>("../assets/brands/*", { eager: true });

// Order = display order
// DoubleTree, ESL FACEIT, GCF, Scopely, Hevolution, Steer Studios, Nine66 and Veto
// are shown as suppliers instead (Become a Supplier page).
export const clients = load(clientFiles, {
  capgemini: "Capgemini",
  apco: "APCO Worldwide",
  "vov-savvy": "VOV powered by Savvy",
});

// Source: Vendors/adjusted by claude (cleaned, trimmed, normalised)
export const suppliers = load(supplierFiles, {
  jarir: "Jarir Bookstore",
  extra: "eXtra",
  "ola-najd": "Ola Najd Co.",
  doubletree: "DoubleTree by Hilton",
  "esl-faceit": "ESL FACEIT Group",
  "global-cybersecurity-forum": "Global Cybersecurity Forum",
  scopely: "Scopely",
  hevolution: "Hevolution",
  "steer-studios": "Steer Studios",
  nine66: "Nine66",
  veto: "Veto",
});

export const brands = load(brandFiles, {
  apple: "Apple",
  microsoft: "Microsoft",
  dell: "Dell",
  asus: "ASUS",
  "post-it": "Post-it",
  kleenex: "Kleenex",
  nespresso: "Nespresso",
  lipton: "Lipton",
  almarai: "Almarai",
  berain: "Berain",
  dunkin: "Dunkin'",
});
