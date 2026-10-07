// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://oupco.com',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  // English at "/", Arabic at "/ar/": the sitemap links each page to its other-language version
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } }, filter: (page) => !page.includes('/404') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
