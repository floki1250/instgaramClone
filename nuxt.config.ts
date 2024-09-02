// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Instagram",
    },
  },

  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  compatibilityDate: "2024-08-31",
});