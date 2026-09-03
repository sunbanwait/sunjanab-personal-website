// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import Analytics from '@vercel/analytics/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), Analytics()],
  vite: {
    plugins: [tailwindcss()],
  },
});