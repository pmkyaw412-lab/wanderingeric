import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ After you deploy, change this to your real URL (e.g. the one Vercel
  // gives you, or your custom domain). It powers the sitemap, RSS and SEO tags.
  site: 'https://wanderingeric-hdfc.vercel.app',
  integrations: [sitemap()],
});
