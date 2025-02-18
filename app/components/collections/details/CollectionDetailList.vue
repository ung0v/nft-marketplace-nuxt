<template>
  <div class="space-y-4 pb-64">
    <div class="inline-flex items-center gap-x-2 py-4">
      <span class="flex size-5 cursor-pointer items-center justify-center">
        <i class="pi pi-refresh !text-lg" />
      </span>
      {{ nftItems.length || 0 }} items
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <NFTDetails
        v-for="nft in nftItems"
        :key="nft.id"
        :data="nft"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Attribute {
  trait_type: string
  value: string
}

interface NFTMetadata {
  id: number // Added id field
  name: string
  description: string
  image: string // Usually IPFS or Arweave URL
  external_url?: string
  attributes: Attribute[]
  price: number // Added price field
}

const _cartList = useState<NFTMetadata[]>('cartList', () => [])

const nftItems = ref<NFTMetadata[]>([
  {
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
  },
  {
    id: 2,
    name: 'NFT #2',
    description: 'Description for NFT #2',
    image: 'ipfs://example2',
    price: 0.8,
    attributes: [
      { trait_type: 'Background', value: 'Grayish Green' },
      { trait_type: 'Body', value: 'Human' },
      { trait_type: 'Eyes', value: 'Ruby' },
      { trait_type: 'Mouth', value: 'Neutral' },
      { trait_type: 'Headwear', value: 'Beanie' },
      { trait_type: 'Outfit', value: 'Casual' },
    ],
  },
  {
    id: 3,
    name: 'NFT #3',
    description: 'Description for NFT #3',
    image: 'ipfs://example3',
    price: 1.0,
    attributes: [
      { trait_type: 'Background', value: 'Grayish Blue' },
      { trait_type: 'Body', value: 'Alien' },
      { trait_type: 'Eyes', value: 'Digital' },
      { trait_type: 'Mouth', value: 'Cyber' },
      { trait_type: 'Headwear', value: 'Helmet' },
      { trait_type: 'Outfit', value: 'Futuristic' },
    ],
  },
  {
    id: 4,
    name: 'NFT #4',
    description: 'Description for NFT #4',
    image: 'ipfs://example4',
    price: 0.7,
    attributes: [
      { trait_type: 'Background', value: 'Soft Gray' },
      { trait_type: 'Body', value: 'Human' },
      { trait_type: 'Eyes', value: 'Emerald' },
      { trait_type: 'Mouth', value: 'Grin' },
      { trait_type: 'Headwear', value: 'Crown' },
      { trait_type: 'Outfit', value: 'Royal' },
    ],
  },
  {
    id: 5,
    name: 'NFT #5',
    description: 'Description for NFT #5',
    image: 'ipfs://example5',
    price: 0.9,
    attributes: [
      { trait_type: 'Background', value: 'Grayish Green' },
      { trait_type: 'Body', value: 'Robot' },
      { trait_type: 'Eyes', value: 'Sapphire' },
      { trait_type: 'Mouth', value: 'Smile' },
      { trait_type: 'Headwear', value: 'Helmet' },
      { trait_type: 'Outfit', value: 'Armor' },
    ],
  },
  // ... 15 more NFT items following the same structure ...
  {
    id: 20,
    name: 'NFT #20',
    description: 'Description for NFT #20',
    image: 'ipfs://example20',
    price: 1.2,
    attributes: [
      { trait_type: 'Background', value: 'Grayish Blue' },
      { trait_type: 'Body', value: 'Alien' },
      { trait_type: 'Eyes', value: 'Digital' },
      { trait_type: 'Mouth', value: 'Cyber' },
      { trait_type: 'Headwear', value: 'Helmet' },
      { trait_type: 'Outfit', value: 'Futuristic' },
    ],
  },
])
</script>

<style>

</style>
