<template>
  <div
    class="group relative inline-flex cursor-pointer flex-col overflow-hidden rounded-2xl border hover:bg-gray-100"
    @click="handleAddToCart"
  >
    <Checkbox
      style="display: none;"
      class="!absolute right-2 top-2 z-50 !size-10 opacity-100 group-hover:!inline-flex"
      :class="{ '!inline-flex': isInCart }"
      size="large"
      binary
      :model-value="isInCart"
      @click.stop
    />
    <div
      class="relative aspect-square overflow-hidden rounded-2xl transition-all"
      :class="{ 'm-2 border-4 border-primary': isInCart }"
    >
      <NuxtImg
        src="/snake.png"
        class="w-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:opacity-60"
      />
    </div>
    <div class="px-4 py-3">
      <div class="mb-2 flex items-center justify-between gap-1">
        <NuxtLink
          :to="`/nft/${props.data.id}`"
          class="line-clamp-1 break-all text-base"
        >
          {{ props.data.name }}
        </NuxtLink>
        <span class="flex items-center font-bold">
          <SolanaIcon class="mr-1" />
          {{ props.data.price }}
        </span>
      </div>
      <Divider class="!my-2" />
      <div class="flex justify-between">
        <Button
          variant="link"
          label="Connect"
          style="display:none"
          class="!p-0 group-hover:!flex"
          @click.stop="connect"
        />
        <Button
          icon="pi pi-ellipsis-h"
          icon-class="!text-lg"
          variant="text"
          class="ml-auto !size-10"
          @click.stop="toggle"
        />
        <Menu
          id="overlay_menu"
          ref="menu"
          :model="items"
          :popup="true"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Attribute {
  trait_type: string
  value: string
}

interface NFTMetadata {
  id: number
  name: string
  description: string
  image: string // Usually IPFS or Arweave URL
  externalUrl?: string
  attributes: Attribute[]
  price: number
}
type Props = {
  data: NFTMetadata
}

const props = defineProps<Props>()

const menu = ref()
const items = ref([

  {
    label: 'Make an offer',
    // icon: 'pi pi-dollar',
  },
  {
    label: 'View more',
  },
  {
    label: 'Copy link',
  },
  {
    label: 'Refresh metadata',
  },
  {
    label: 'Add favorite',
  },
],
)

const toggle = (event: MouseEvent) => {
  menu.value.toggle(event)
}

const connect = (_event: MouseEvent) => {
  // TODO
}

const cartList = useState<NFTMetadata[]>('cartList')

const isInCart = computed(() => {
  return cartList.value.some(item => item.id === props.data.id)
})

const handleAddToCart = () => {
  if (!isInCart.value) {
    cartList.value.push(props.data)
  }
  else {
    cartList.value = cartList.value.filter(item => item.id !== props.data.id)
  }
}
</script>

<style scoped>
.p-checkbox-box {
  @apply !size-10 !rounded-lg;
  svg {
    @apply !size-8;
  }
}
</style>
