<template>
  <nuxt-link
    :to="`/collections/${props.data.name}`"
    class="group relative mx-2 flex h-[240px] cursor-pointer flex-col overflow-hidden rounded-2xl border p-[8px] transition-transform duration-500 hover:-translate-y-2"
  >
    <div class="relative max-h-full flex-1">
      <div class="relative h-full overflow-hidden rounded-2xl">
        <NuxtImg
          :style="{ objectPosition: 'center' }"
          :src="props.data.coverImage || '/snake.png'"
          class="pointer-events-none h-0 max-h-full min-h-full w-full select-none object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div class="absolute  -bottom-4 left-4">
        <div
          class="relative aspect-square w-14 overflow-hidden rounded-xl border-2 bg-white transition-transform delay-75 duration-500 group-hover:scale-110"
        >
          <NuxtImg
            :src="props.data.avatar || '/snake.png'"
            class="size-full object-cover"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-between px-4 pb-3 pt-[26px] text-sm">
      <div>
        <div class="flex items-center gap-1">
          <div class="truncate font-bold">
            {{ props.data.name }}
          </div>
        </div>
        <div class="text-gray-600 dark:text-gray-400">
          {{ props.data.itemCount }} items
        </div>
      </div>
      <div>
        <div class="font-bold">
          Total volume
        </div>
        <div class="flex items-center justify-end gap-1 text-gray-600 dark:text-gray-400">
          <SolanaIcon /><span>{{ props.data.totalVolume.toLocaleString() }}</span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
type CollectionItemProps = {
  data: {
    name: string
    itemCount: number
    totalVolume: number
    avatar: string
    coverImage: string
  }
}

const props = defineProps<CollectionItemProps>()
</script>

<style></style>
