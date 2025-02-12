<template>
  <div class="p-4 pb-20 md:px-10">
    <div class="z-20 mb-4 flex justify-between bg-white py-4">
      <CollectionFilters />
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <CollectionItem
        v-for="collection in featureCollections"
        :key="collection.name"
        :data="collection"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
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

<style>

</style>
