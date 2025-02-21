import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@primevue/nuxt-module',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@wagmi/vue/nuxt',
    '@hebilicious/vue-query-nuxt',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: ['~/types'],
  },
  // devtools: { enabled: false },
  css: ['primeicons/primeicons.css', '~/assets/css/tailwind.css', '~/assets/css/main.css'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
  },
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
      // ripple: true, // disable ripple
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
  tailwindcss: {
    exposeConfig: true,
  },
  vueQuery: {
    // useState key used by nuxt for the vue query state.
    stateKey: 'vue-query-nuxt', // default
    // If you only want to import some functions, specify them here.
    // You can pass false or an empty array to disable this feature.
    // default: ["useQuery", "useQueries", "useInfiniteQuery", "useMutation", "useIsFetching", "useIsMutating", "useQueryClient"]
    // autoImports: ['useQuery'],
    // Pass the vue query client options here ...
    queryClientOptions: {
      defaultOptions: { queries: { staleTime: 5000 } }, // default
    },
    // Pass the vue query plugin options here ....
    vueQueryPluginOptions: {
      enableDevtoolsV6Plugin: true,
    },
  },
})
