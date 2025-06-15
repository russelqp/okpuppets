// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.okpuppets.com',
  //base: '/docs',
  trailingSlash: "always",

  compressHTML: false,

  build: {
      inlineStylesheets: `auto`,
      format: 'file',
      //assets: '_custom'
      //assetsPrefix: 'https://www.okpuppets.com/',
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      transformer: "lightningcss",
    },
  },
});