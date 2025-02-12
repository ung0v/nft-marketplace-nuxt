<script setup lang="ts">
useServerHead({
  htmlAttrs: {
    lang: 'en',
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
  <NuxtLoadingIndicator
    :throttle="0"
    :height="5"
  />

  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
