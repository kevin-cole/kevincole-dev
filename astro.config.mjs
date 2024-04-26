import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

import compression from "vite-plugin-compression2"
import svgr from "vite-plugin-svgr"
import tailwind from "@astrojs/tailwind"
import dotenv from 'dotenv'

dotenv.config()

export const siteUrl = process.env.PUBLIC_SITE_URL

const date = new Date().toISOString()
// https://astro.build/config
export default defineConfig({
  site: siteUrl + "/",

  integrations: [
    tailwind(),
    react(),
    svgr(),
    sitemap({
      serialize(item) {
        // Default values for pages
        item.priority = siteUrl + "/" === item.url ? 1.0 : 0.9
        item.changefreq = "weekly"
        item.lastmod = date

        // if you want to exclude a page from the sitemap, do it here
        // if (/exclude-from-sitemap/.test(item.url)) {
        //     return undefined;
        // }

        // if any page needs a different priority, changefreq, or lastmod, uncomment the following lines and adjust as needed
        // if (/test-sitemap/.test(item.url)) {
        //     item.changefreq = "daily";
        //     item.lastmod = date;
        //     item.priority = 0.9;
        // }

        // if you want to change priority of all subpages like "/posts/*", you can use:
        // if (/\/posts\//.test(item.url)) {
        //     item.priority = 0.7;
        // }
        return item
      },
    }),
  ],
  renderers: ["@astrojs/renderer-react"],
  prerender: true,
  vite: {
    plugins: [compression(), svgr()],
    optimizeDeps: {
      include: ["react", "react-dom", "@astrojs/react"],
      exclude: ["fsevents", "lightningcss"],
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    resolve: {
      alias: {
        '@ui': new URL('./src/ui', import.meta.url).pathname,
        '@utils': new URL('./src/libs/utils', import.meta.url).pathname,
        '@hooks': new URL('./src/hooks', import.meta.url).pathname,
        '@static': new URL('./src/static', import.meta.url).pathname,
      }
    }
  },
})
