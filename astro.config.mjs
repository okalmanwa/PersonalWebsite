import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Current domain (from the existing repo's CNAME). Swap to careymanwa.com if you move domains.
  site: 'https://careyokal.com',
  integrations: [sitemap()],
  prefetch: true,
});
