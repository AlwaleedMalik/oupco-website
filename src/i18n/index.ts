// i18n helpers. English lives at "/", Arabic at "/ar/".
// Components read the language from the URL, so no prop drilling is needed:
//   const lang = getLang(Astro.url); const t = getT(Astro.url); const l = localizer(lang);
import { en } from "./en";
import { ar } from "./ar";

export type Lang = "en" | "ar";
export type Content = typeof en;

const dict: Record<Lang, Content> = { en, ar };

/** Normalise build/dev paths: "/about.html" → "/about", "/index.html" → "/", "/ar/" → "/ar" */
export const cleanPath = (pathname: string) => {
  let p = pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  if (p.length > 1) p = p.replace(/\/$/, "");
  return p || "/";
};

export const isAr = (pathname: string) => /^\/ar(\/|$)/.test(cleanPath(pathname));
export const getLang = (url: URL): Lang => (isAr(url.pathname) ? "ar" : "en");
export const getT = (url: URL): Content => dict[getLang(url)];
export const dirOf = (lang: Lang) => (lang === "ar" ? "rtl" : "ltr");

/** "/ar/about" → "/about", "/ar" → "/" */
export const stripLang = (pathname: string) => cleanPath(pathname).replace(/^\/ar(?=\/|$)/, "") || "/";

/** Prefix an internal path for the given language. External, mailto:, tel: and #hash links pass through. */
export const localizePath = (href: string, lang: Lang) => {
  if (lang === "en" || !href.startsWith("/") || href.startsWith("//") || isAr(href)) return href;
  const [path, hash] = href.split("#");
  const out = path === "/" ? "/ar" : `/ar${path}`;
  return hash !== undefined ? `${out}#${hash}` : out;
};

export const localizer = (lang: Lang) => (href: string) => localizePath(href, lang);

/** Static paths for pages under src/pages/[...lang]/: "/x" (English) and "/ar/x" (Arabic). */
export const langPaths = () => [{ params: { lang: undefined } }, { params: { lang: "ar" } }];

/** Select options whose saved value stays English while the label is localized. */
export const options = (values: string[], labels: string[]) => values.map((value, i) => ({ value, label: labels[i] ?? value }));

export { en, ar };
