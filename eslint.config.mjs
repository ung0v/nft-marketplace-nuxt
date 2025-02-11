// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      'no-undef': 1,
      'vue/multi-word-component-names': 0,
    },
  },
)
