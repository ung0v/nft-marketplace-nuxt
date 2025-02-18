<template>
  <div>
    <div class="relative z-20 hidden h-60 w-full bg-white md:block">
      <div class="dark:from-primary-dark absolute z-10 h-full w-3/4 bg-gradient-to-r from-white via-[rgba(255,255,255,.95)] dark:via-[rgba(10,12,29,.9)]" />
      <div class="absolute left-0 top-0 size-full overflow-hidden">
        <NuxtImg
          fit="cover"
          src="/snake.png"
          fill
          class="h-0 max-h-full min-h-full w-full object-cover object-center"
        />
      </div>
      <div class="absolute left-0 top-0 z-20 size-full w-full p-10">
        <div class="flex justify-between">
          <div>
            <div class="mb-4 flex items-center gap-4">
              <div class="relative size-[92px] overflow-hidden rounded-md bg-white">
                <NuxtImg
                  fit="cover"
                  src="/snake.png"
                  fill
                />
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h1 class="text-2xl font-semibold">
                    Sorcies
                  </h1>
                </div><p class="line-clamp-1 max-w-[400px] overflow-hidden text-ellipsis font-light">
                  Sorcies is a collection of 7,777 unique NFTs on a journey to Build a Better Tomorrow.
                </p>
              </div>
            </div><div class="flex gap-8">
              <div class="flex flex-col">
                <div class="text-xl font-semibold">
                  7.78K
                </div><div class="text-sm font-light text-gray-500">
                  Items
                </div>
              </div><div class="flex flex-col">
                <div class="flex items-center gap-2 text-xl font-semibold">
                  <span>49.31k</span><SolanaIcon />
                </div><div class="text-sm font-light text-gray-500">
                  Total volume
                </div>
              </div><div class="flex flex-col">
                <div class="flex items-center gap-2 text-xl font-semibold">
                  <span>0.099</span><SolanaIcon />
                </div><div class="text-sm font-light text-gray-500">
                  Floor
                </div>
              </div><div class="flex flex-col">
                <div class="flex items-center gap-2 text-xl font-semibold">
                  <span>-</span><SolanaIcon />
                </div><div class="text-sm font-light text-gray-500">
                  Best global offer
                </div>
              </div>
            </div>
          </div><div class="flex gap-4 self-end" />
        </div>
      </div>
    </div>
    <CollectionTabs />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
