// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL and BASE_PATH are filled in automatically by the GitHub Pages
// workflow (.github/workflows/deploy.yml), so the same code works for
// username.github.io and for username.github.io/repo-name.
// If you host somewhere else, replace the fallbacks below.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.zarrenama.com',
  base: process.env.BASE_PATH || '/',
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
