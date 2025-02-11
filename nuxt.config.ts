import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@primevue/nuxt-module',
  ],

  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
      formatters: true,
    },
  },
  primevue: {
    options: {
      ripple: true,
      unstyled: false,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    },
    components: {
      exclude: ['Editor', 'Chart'],
    },
  },
})
