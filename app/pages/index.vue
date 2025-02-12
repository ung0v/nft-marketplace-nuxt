<template>
  <div class="relative overflow-hidden pb-20">
    <Announce />
    <div class="mx-auto md:px-10">
      <div class="container relative mx-auto mb-16 max-w-screen-xl px-8 py-16 md:my-16 md:px-14">
        <div class="absolute right-0 top-0 z-[-1] size-full overflow-hidden">
          <NuxtImg
            src="/snake.png"
            class="size-full scale-110 object-cover opacity-50 blur-md dark:opacity-20"
          />
        </div>

        <div
          class="absolute bottom-0 left-0 z-0 h-1/2 w-full bg-gradient-to-t from-white to-transparent dark:from-[#1A1C1F]"
        />
        <div class="z-10 flex flex-col items-center justify-between md:flex-row">
          <div class="flex flex-col gap-8">
            <h1 class="text-[50px] font-semibold leading-[52px] md:text-[72px] md:leading-[68px]">
              Trade NFTs <br>
              at<span class="shining font-extrabold uppercase"> lowest</span>

              cost
            </h1>
            <div class="flex items-center">
              <Badge
                value="New"
                class="mr-2 !px-4 !py-2"
                size="large"
              />
              <nuxt-link to="/">
                <Button
                  label="Take out a loan in seconds. Read more"
                  variant="link"
                  class="!p-0 !text-black"
                />
              </nuxt-link>
            </div>
            <p class="mb-4 text-xl">
              Buy or sell NFTs and save in fees. The lowest-fee <br> marketplace on Solana.
            </p>
            <div class="flex items-center gap-4">
              <Button
                label="Explore collections"
                severity="contrast"
                class="w-52"
              />
              <Button
                label="Sell my NFTs"
                class="w-52"
                variant="outlined"
              />
            </div>
          </div>
          <div
            class="group table w-full max-w-[450px] cursor-pointer rounded-xl border bg-[rgba(123,141,182,0.05)] p-5 backdrop-blur-xl transition-all dark:border-gray-600 dark:bg-white  dark:bg-opacity-10"
          >
            <div class="relative overflow-hidden">
              <NuxtImg
                src="/snake.png"
                width="407"
                height="407"
                class="transition-all hover:scale-105"
              />
              <div
                class="backdrop absolute left-4 top-4 z-10 flex items-center gap-2 rounded-lg bg-black bg-opacity-50 px-4 py-2"
              >
                <svg
                  viewBox="0 0 16 18"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                >
                  <path
                    d="M11.556 1.8a21.14 21.14 0 0 0-2.008 2.108A27.424 27.424 0 0 0 6 0C2.49 3.205 0 7.381 0 9.9 0 14.374 3.582 18 8 18s8-3.626 8-8.1c0-1.873-1.856-5.735-4.444-8.1Zm-.696 11.976a4.853 4.853 0 0 1-2.758.849c-2.577 0-4.673-1.678-4.673-4.403 0-1.358.868-2.554 2.6-4.597.247.28 3.529 4.406 3.529 4.406l2.094-2.35c.148.24.282.476.402.701.977 1.835.565 4.183-1.194 5.394Z"
                  />
                </svg>
                <div class="font-semibold text-white">
                  Trending
                </div>
              </div>
            </div>

            <div class="flex items-end justify-between pb-2 pt-6">
              <div>
                <div class="text-[#00CE84]">
                  The Sneks
                </div>
                <div>Snek #9272</div>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 397.7 311.7"
                    xml:space="preserve"
                    height="14"
                  >
                    <linearGradient
                      id="sol_svg__a"
                      gradientUnits="userSpaceOnUse"
                      x1="360.879"
                      y1="351.455"
                      x2="141.213"
                      y2="-69.294"
                      gradientTransform="matrix(1 0 0 -1 0 314)"
                    >
                      <stop
                        offset="0"
                        style="stop-color: rgb(0, 255, 163);"
                      />
                      <stop
                        offset="1"
                        style="stop-color: rgb(220, 31, 255);"
                      />
                    </linearGradient>
                    <path
                      d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"
                      style="fill: url(&quot;#sol_svg__a&quot;);"
                    />
                    <linearGradient
                      id="sol_svg__b"
                      gradientUnits="userSpaceOnUse"
                      x1="264.829"
                      y1="401.601"
                      x2="45.163"
                      y2="-19.148"
                      gradientTransform="matrix(1 0 0 -1 0 314)"
                    >
                      <stop
                        offset="0"
                        style="stop-color: rgb(0, 255, 163);"
                      />
                      <stop
                        offset="1"
                        style="stop-color: rgb(220, 31, 255);"
                      />
                    </linearGradient>
                    <path
                      d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"
                      style="fill: url(&quot;#sol_svg__b&quot;);"
                    />
                    <linearGradient
                      id="sol_svg__c"
                      gradientUnits="userSpaceOnUse"
                      x1="312.548"
                      y1="376.688"
                      x2="92.882"
                      y2="-44.061"
                      gradientTransform="matrix(1 0 0 -1 0 314)"
                    >
                      <stop
                        offset="0"
                        style="stop-color: rgb(0, 255, 163);"
                      />
                      <stop
                        offset="1"
                        style="stop-color: rgb(220, 31, 255);"
                      />
                    </linearGradient>
                    <path
                      d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"
                      style="fill: url(&quot;#sol_svg__c&quot;);"
                    />
                  </svg><span class="font-bold">0.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto mb-16 max-w-screen-xl px-8">
        <div class="mb-8 flex items-center space-x-4">
          <h3 class="text-2xl font-bold">
            Trending Collections
          </h3>
          <Select
            v-model="selected"
            :default-value="options.find(option => option.code === '24h')"
            :options="options"
            option-label="name"
            class="w-full max-w-[180px]"
          />
        </div>
        <div class="grid grid-flow-col grid-rows-6 gap-x-16 gap-y-8 xl:grid-rows-4">
          <div
            v-for="(collection, index) of trendingCollections"
            :key="collection.name"
            class="group flex cursor-pointer items-center justify-between gap-x-2 border-b pb-4 transition-opacity hover:opacity-75"
          >
            <div class="flex items-center gap-x-4">
              <span class="font-bold">{{ index + 1 }}</span>
              <NuxtLink
                to="/collection"
                :title="collection.name"
              >
                <div class="flex items-center gap-x-2">
                  <NuxtImg
                    src="/snake.png"
                    width="50"
                    height="50"
                    class="rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div>
                    <div class="line-clamp-1 font-semibold">{{ collection.name }}</div>
                    <div class="text-sm text-gray-500">Floor ${{ collection.floorPrice }}</div>
                  </div>
                </div>
              </nuxtlink>
            </div>
            <div class="flex flex-col justify-between">
              <div
                class="text-right"
                :class="{
                  'text-[#00CE84]': collection.percentChange > 0,
                  'text-[#FF4D4F]': collection.percentChange < 0,
                }"
              >
                {{ collection.percentChange }}%
              </div>
              <div class="text-sm text-gray-500">
                Vol ${{ collection.volume }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mb-16 px-8">
        <h3 class="mb-8 text-2xl font-bold">
          Featured Collections
        </h3>
        <Carousel
          :value="featureCollections"
          :num-visible="3"
          :num-scroll="1"
          :responsive-options="responsiveOptions"
          :show-indicators="false"
          class="py-2"
        >
          <template #item="slotProps">
            <div
              class="group relative mx-2 flex h-[240px] cursor-pointer flex-col overflow-hidden rounded-2xl border p-[8px] transition-transform duration-500 hover:-translate-y-2"
            >
              <div class="relative max-h-full flex-1">
                <div class="relative h-full overflow-hidden rounded-2xl">
                  <NuxtImg
                    :style="{ objectPosition: 'center' }"
                    :src="slotProps.data.coverImage || '/snake.png'"
                    class="pointer-events-none h-0 max-h-full min-h-full w-full select-none object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div class="absolute -bottom-4 left-4">
                  <div
                    class="relative aspect-square w-14 overflow-hidden rounded-xl border-2 bg-white transition-transform delay-75 duration-500 group-hover:scale-110"
                  >
                    <NuxtImg
                      :src="slotProps.data.avatar || '/snake.png'"
                      class="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div class="flex justify-between px-4 pb-3 pt-[26px] text-sm">
                <div>
                  <div class="flex items-center gap-1">
                    <div class="truncate font-bold">
                      {{ slotProps.data.name }}
                    </div>
                  </div>
                  <div class="text-gray-600 dark:text-gray-400">
                    {{ slotProps.data.itemCount }} items
                  </div>
                </div>
                <div>
                  <div class="font-bold">
                    Total volume
                  </div>
                  <div class="flex items-center justify-end gap-1 text-gray-600 dark:text-gray-400">
                    <span>$</span><span>{{ slotProps.data.totalVolume }}</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
      <div class="container mb-16 px-8">
        <h3 class="mb-8 text-2xl font-bold">
          Highest Volume Collections
        </h3>
        <Carousel
          :value="featureCollections"
          :num-visible="3"
          :num-scroll="1"
          :responsive-options="responsiveOptions"
          :show-indicators="false"
          class="py-2"
        >
          <template #item="slotProps">
            <CollectionItem :data="slotProps.data" />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  colorMode: 'light',
})

const options = [
  { name: 'Last 5 minutes', code: '5m' },
  { name: 'Last 1 hours', code: '1h' },
  { name: 'Last 24 hours', code: '24h' },
  { name: 'Last 7 days', code: '7d' },
  { name: 'Last 30 days', code: '30d' },
]

const selected = ref()

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
])

const trendingCollections = [
  { name: 'CryptoPunks', floorPrice: 15.2, volume: 1200, percentChange: 5.2 },
  { name: 'Bored Ape Yacht Club', floorPrice: 25.3, volume: 1500, percentChange: -3.1 },
  { name: 'Mutant Ape Yacht Club', floorPrice: 10.5, volume: 800, percentChange: 2.8 },
  { name: 'Doodles', floorPrice: 8.1, volume: 600, percentChange: 1.5 },
  { name: 'Azuki', floorPrice: 12.4, volume: 900, percentChange: -0.7 },
  { name: 'CloneX', floorPrice: 9.7, volume: 700, percentChange: 4.3 },
  { name: 'Moonbirds', floorPrice: 11.3, volume: 750, percentChange: -2.4 },
  { name: 'Cool Cats', floorPrice: 7.2, volume: 500, percentChange: 3.9 },
  { name: 'World of Women', floorPrice: 6.8, volume: 450, percentChange: 0.8 },
  { name: 'VeeFriends', floorPrice: 14.1, volume: 1100, percentChange: -1.2 },
  { name: 'Meebits', floorPrice: 5.9, volume: 400, percentChange: 2.1 },
  { name: 'Pudgy Penguins', floorPrice: 4.3, volume: 300, percentChange: -0.5 },
]

const featureCollections = [
  {
    name: 'CryptoPunks',
    itemCount: 10000,
    totalVolume: 825000,
    avatar: '',
    coverImage: 'https://solanart.io/_next/image?url=https%3A%2F%2Fapi-v2.solanart.io%2Fcdn%2F500%2Fhttps%3A%2F%2Fdata.solanart.io%2Fimg%2Fcollections%2Fthesneks.webp&w=1080&q=75',
  },
  {
    name: 'Bored Ape Yacht Club',
    itemCount: 8000,
    totalVolume: 750000,
    avatar: '',
    coverImage: '',
  },
  {
    name: 'Doodles',
    itemCount: 12000,
    totalVolume: 425000,
    avatar: '',
    coverImage: '',
  },
  {
    name: 'Azuki',
    itemCount: 15000,
    totalVolume: 680000,
    avatar: '',
    coverImage: '',
  },
  {
    name: 'CloneX',
    itemCount: 9000,
    totalVolume: 390000,
    avatar: '',
    coverImage: '',
  },
  {
    name: 'Moonbirds',
    itemCount: 11000,
    totalVolume: 520000,
    avatar: '',
    coverImage: '',
  },
  {
    name: 'World of Women',
    itemCount: 7500,
    totalVolume: 310000,
    avatar: '',
    coverImage: '',
  },
  {
    name: 'VeeFriends',
    itemCount: 13000,
    totalVolume: 480000,
    avatar: '',
    coverImage: '',
  },
]
</script>

<style></style>
