// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages",

    prerender: {
      autoSubfolderIndex: false,
    },

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxtjs/seo",
    "@nuxtjs/robots",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          "Roboto Slab": true,
        },
      },
    ],
    "nuxt-schema-org",
    "nuxt-gtag",
    "nuxt-clarity-analytics",
    "nuxt-svgo",
    "nitro-cloudflare-dev",
  ],
  css: ["~/assets/css/main.css"],
  gtag: {
    id: "G-JYXJMD14PQ",
  },
});