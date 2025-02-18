<template>
  <div>
    <div class="relative mb-6 flex flex-col gap-10 md:flex-row">
      <div class="top-[92px] self-start md:sticky">
        <div class="lg:max-w-auto max-w-[500px] lg:w-[500px]">
          <div class="group relative">
            <div class="relative w-full cursor-pointer overflow-hidden rounded-2xl md:min-w-[400px]">
              <NuxtImg
                src="/snake.png"
                class="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div class="mb-6">
          <div class="flex gap-2">
            <NuxtImg
              src="/snake.png"
              class="size-10 rounded-lg object-cover"
            />
            <div class="flex flex-col">
              <h5>{{ data.name }}</h5>
              <p class="text-xs text-gray-400">
                Floor - 93.5 SOL
              </p>
            </div>
          </div>
        </div>
        <div>
          {{ }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const data = ref({
  id: 1,
  name: 'NFT #1',
  description: 'Description for NFT #1',
  image: 'ipfs://example1',
  price: 0.5, // Price in ETH
  attributes: [
    { trait_type: 'Background', value: 'Soft Gray' },
    { trait_type: 'Body', value: 'Robot' },
    { trait_type: 'Eyes', value: 'Sapphire' },
    { trait_type: 'Mouth', value: 'Smile' },
    { trait_type: 'Headwear', value: 'Crown' },
    { trait_type: 'Outfit', value: 'Armor' },
  ],
})
</script>

<style>

</style>
