<template>
  <header class="bg-white dark:bg-gray-800 shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <nuxt-link
          to="/"
          class="text-2xl font-bold text-gray-800"
        >NFT Marketplace</nuxt-link>
        <div class="">
          <InputText
            type="text"
            :v-model="search"
          />
        </div>
        <div class="space-x-4">
          <Button @click="toggleColorMode">
            Toggle Color Mode
          </Button>
          <nuxt-link to="/creator-dashboard">Creator Dashboard</nuxt-link>
          <nuxt-link to="/profile">Profile</nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const search = ref('')
const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<style></style>
