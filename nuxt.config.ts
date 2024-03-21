// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiUrl: process.env.API_URL,
  },

  app: {
    head: {
      title: "Nuxt 3",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: ["@/assets/scss/app.scss"],

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
    "@nuxtjs/eslint-module",
  ],

  typescript: {
    typeCheck: true,
  },

  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "sass:color";`,
        },
      },
    },
  },
});
