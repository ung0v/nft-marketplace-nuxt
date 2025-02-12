// @ts-nocheck
import vue from 'eslint-plugin-vue'
import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...vue.configs['flat/recommended'],
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'no-undef': 1,
      'vue/multi-word-component-names': 0,
    },
  },
)
