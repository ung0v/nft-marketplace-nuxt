<script setup lang="ts">
useServerHead({
  htmlAttrs: {
    lang: 'en',
    // class: "my-app-dark",
  },
})

useSeoMeta({
  titleTemplate: 'Nuxt NFT Marketplace | %s',
  description: 'NFT Marketplace built with Nuxt.',
  // ogImage: 'https://hn.nuxt.dev/cover.jpg',
  // ogImageAlt: 'Nuxt Hackernews',
  // twitterImage: 'https://hn.nuxt.dev/cover.jpg',
  // twitterSite: '@nuxt_js',
  // twitterCreator: '@nuxt_js',
  // twitterCard: 'summary_large_image',
})
const layout = 'client'
</script>

<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
