import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
  buildModules: ["@nuxtjs/supabase", "@nuxtjs/pwa"],
  css: ["~/assets/css/tailwind.css"],
  pwa: {
    icon: {
      source: "/static/icon_pwa.png",
      fileName: "icon_pwa.png",
    },
    meta: {
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: "white",
    },
    manifest: {
      lang: "ja",
      name: "Presentation Watch",
      short_name: "PresenWatch",
      description:
        "プレゼンテーションの時間管理を行うアプリケーションです。同じアカウントでログインしていただくと同期的に時間の管理が可能です。",
      display: "standalone",
      theme_color: "#222",
      background_color: "#222",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "/static/icon_pwa.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
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
