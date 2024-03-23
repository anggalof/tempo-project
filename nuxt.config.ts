// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiUrl: process.env.API_URL || 'https://api.themoviedb.org/3/',
  },

  app: {
    head: {
      title: "Tempo Gaga Project",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: ["@/assets/scss/app.scss"],

  modules: [[
    "@nuxtjs/google-fonts",
    {
      families: {
        Roboto: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  ], "@nuxtjs/eslint-module", "@nuxt/image"],

  image: {
    domains: [
      'https://image.tmdb.org/'
    ]
  },

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