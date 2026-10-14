import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import placeholderCheck from './integrations/placeholder-check.mjs';

export default defineConfig({
  site: 'https://spareforge.net',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', de: 'de' } },
      filter: (page) => !page.includes('/404'),
    }),
    placeholderCheck(),
  ],
});
