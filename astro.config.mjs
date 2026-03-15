// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import db from "@astrojs/db";
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PUBLIC_APP_URL,
  vite: {
      plugins: [
        tailwindcss()
      ],
  },
  adapter: vercel(),
  integrations: [
    icon(),
    sitemap()
  ],
});