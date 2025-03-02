// @ts-check
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "http://192.168.3.8/archives/markout/PostingApp",
  base: "/",
  trailingSlash: "always",
  server: { port: 8080 },

  experimental: {
    svg: true,
  },

  integrations: [svelte()],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "./src/styles/_vars.scss" as var;
          @use "./src/styles/_mixins.scss" as mixin;
          `,
        },
      },
    },
  },
});
