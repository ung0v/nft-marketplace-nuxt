<template>
  <Card class="w-[350px] overflow-hidden border p-8 !shadow-none">
    <template #header />
    <template #title>
      <div class="mb-8 flex items-center justify-between">
        <span class="text-base font-bold">
          My Cart ({{ cartList.length }})
        </span>
        <Button
          icon="pi pi-trash"
          label="Clear"
          variant="outlined"
          size="small"
          class="!rounded-2xl"
          @click="handleClearCart"
        />
      </div>
    </template>

    <template #content>
      <div class="flex flex-col gap-y-4">
        <div
          v-for="item of cartList"
          :key="item.id"
          class="inline-flex gap-2"
        >
          <div class="relative aspect-square size-10">
            <NuxtImg
              src="/snake.png"
              class="rounded object-cover"
            />
            <Button
              icon="pi pi-times"
              icon-class="text-black !text-xs !flex items-center justify-center !size-3"
              class="!absolute right-[-10px] top-[-10px] !size-6 !items-center !justify-center !rounded-full !border-gray-100 !bg-white"
              variant="outlined"
              @click="handleRemoveFromCart(item.id)"
            />
          </div>
          <div class="flex flex-col justify-between">
            <span class="font-medium">{{ item.name }}</span>
            <span class="text-xs">{{ item.description }}</span>
          </div>
          <div class="ml-auto flex items-center gap-1">
            <SolanaIcon />
            {{ item.price }}
          </div>
        </div>
      </div>
      <Divider class="!mb-6" />
      <div class="mb-6 flex justify-between">
        <span>
          You pay
        </span>
        <span class="flex items-center">
          <SolanaIcon class="mr-1" /> {{ total }}
        </span>
      </div>
    </template>
    <template #footer>
      <Button
        label="Process to checkout "
        severity="contrast"
        class="w-full"
        @click="handleCheckout"
      />
    </template>
  </Card>
</template>

<script lang="ts" setup>
const cartList = useState<NFTMetadata[]>('cartList')
const total = computed(() => {
  return cartList.value.reduce((prev, acc) => prev + acc.price, 0).toFixed(2)
})
const handleCheckout = () => {
  console.log('checkout')
}
const handleClearCart = () => {
  cartList.value = []
}
const handleRemoveFromCart = (id: number) => {
  cartList.value = cartList.value.filter(item => item.id !== id)
}
</script>

<style>
.p-card-body {
  @apply p-0 gap-0;
}
</style>
