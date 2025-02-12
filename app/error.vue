<script setup lang="ts">
const layout = 'client'
</script>

<template>
  <NuxtLayout :name="layout">
    <div class="flex h-screen flex-col items-center justify-center">
      <h3 class="mb-4 text-2xl font-bold">
        There is nothing here
      </h3>

      <p class="mb-10 text-center">
        Unable to find that page. Please check your internet connection.
        <br>
        If you think it‘s an issue, you can contact us.
      </p>
      <NuxtLink to="/">
        <Button
          severity="contrast"
          label="Go back home"
        />
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
