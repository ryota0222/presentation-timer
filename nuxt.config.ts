import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel",
  },
  typescript: {
    typeCheck: true,
  },
  head: {
    title: "Presentation Watch",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  modules: ["@nuxtjs/pwa"],
  buildModules: ["@nuxtjs/supabase"],
  css: ["~/assets/css/tailwind.css"],
  pwa: {
    icon: {
      source: "/icon_pwa.png",
      fileName: "icon_pwa.png",
    },
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: ["@headlessui/vue"],
  },
});
