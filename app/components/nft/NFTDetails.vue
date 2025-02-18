<template>
  <div
    class="group relative inline-flex cursor-pointer flex-col rounded-2xl border hover:bg-gray-100"
    @click="handleAddToCart(props.data)"
  >
    <Checkbox
      :name="props.data.name"
      class="!absolute right-2 top-2"
      size="large"
      binary
      :model-value="checked"
    />
    <div class="relative aspect-square overflow-hidden">
      <NuxtImg
        src="/snake.png"
        class="w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 group-hover:opacity-60"
      />
    </div>
    <div class="px-4 py-3">
      <div class="mb-2 flex items-center justify-between">
        <h3 class="text-base">
          {{ props.data.name }}
        </h3>
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
        />
        <Button
          icon="pi pi-ellipsis-h"
          icon-class="!text-lg"
          variant="text"
          class="ml-auto !size-10"
          @click="toggle"
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

const checked = ref(false)

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

const toggle = (event: unknown) => {
  menu.value.toggle(event)
}

const cartList = useState<NFTMetadata[]>('cartList')

const onUpdate = (value: boolean) => {
  checked.value = !value
  console.log(checked.value)
}

const handleAddToCart = (data: NFTMetadata) => {
  if (!checked.value) {
    cartList.value.push(data)
  }
  else {
    cartList.value = cartList.value.filter(item => item.id !== data.id)
  }
  onUpdate(checked.value)
}
</script>

<style>

</style>
