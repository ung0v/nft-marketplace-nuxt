<template>
  <div class="flex w-full gap-x-4">
    <Button
      icon="pi pi-refresh"
      class="flex !size-14 items-center justify-center rounded-lg bg-gray-100"
      severity="secondary"
    />
    <InputText
      placeholder="Search a collection"
      class="flex-1 !border-0"
      variant="filled"
    />
    <Select
      :default-value="options[0]"
      option-label="name"
      :options="options"
      checkmark
      :highlight-on-select="false"
      class="w-[250px]"
      label-class="align-middle !flex items-center"
    />
  </div>
</template>

<script lang="ts" setup>
const options = [
  { name: 'Trending', value: 'trending' },
  { name: 'Most Popular', value: 'most-popular' },
  { name: 'Newest', value: 'newest' },
]
</script>

<style></style>
