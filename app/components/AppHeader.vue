<template>
  <header class="sticky top-0 z-10 bg-white !bg-opacity-75 px-10 backdrop-blur-md dark:bg-surface-900">
    <div class="mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <nuxt-link
          to="/"
          class="text-2xl font-bold text-gray-800 dark:text-white"
        >NFT Marketplace</nuxt-link>
        <div class="">
          <InputText
            placeholder="Search collection, nft, user..."
            type="text"
            :v-model="search"
            class="w-[350px] !rounded-full !border-0 !px-6 !py-3 !text-sm"
            variant="filled"
          />
        </div>
        <div class="flex items-center space-x-4">
          <nuxt-link to="/collections">
            <Button
              label="Collections"
              variant="text"
              class="!font-bold"
              severity="secondary"
            />

          </nuxt-link>
          <nuxt-link to="/">
            <Button
              label="Sell items"
              variant="text"
              class="!font-bold"
              severity="secondary"
            />

          </nuxt-link>
          <Button
            :icon="colorMode.value === 'light' ? 'pi pi-sun' : 'pi pi-moon'"
            severity="contrast"
            variant="text"
            rounded
            aria-label="Star"
            icon-class="text-[22px]"
            @click="toggleColorMode"
          />
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
