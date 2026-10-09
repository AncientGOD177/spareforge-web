import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://spareforge.net',
  trailingSlash: 'never',
  build: { format: 'file' },
});
