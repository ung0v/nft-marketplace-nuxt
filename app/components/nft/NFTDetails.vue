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
          <div class="mb-4 flex gap-2">
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
          <div class="flex flex-col">
            <h3 class="text-3xl font-bold">
              {{ data.name }}
            </h3>
            <span>
              {{ formatAddress(nftDetails.tokenAddress.value) }}
            </span>
          </div>
        </div>
        <div class="mb-4 rounded-lg bg-gray-100 p-4 dark:bg-[#232528]">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2">
                Price
              </div>
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1 text-2xl">
                  <div class="flex items-center font-semibold">
                    93.5
                    <SolanaIcon class="ml-1" />
                  </div>
                </div>
                <div class="text-sm opacity-50">
                  ~ $<!-- -->15812.72
                </div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-end gap-2">
                Offer
              </div>
              <div class="text-gray-400">
                No offer
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <Button class="flex-1 rounded-md">
              Buy
            </Button>
            <Button class="flex-1 rounded-md">
              Place offer
            </Button>
          </div>
        </div>
        <Accordion
          value="0"
          class="mb-4"
        >
          <AccordionPanel
            value="0"
            class="!rounded-lg !border"
          >
            <AccordionHeader class="!bg-gray-100 hover:!bg-gray-200 dark:!bg-[#232528]">
              Attributes
            </AccordionHeader>
            <AccordionContent class="!p-0 !transition-none">
              <div class="p-4 ">
                <div class="grid grid-cols-2 gap-2 md:grid-cols-3">
                  <div
                    v-for="attr of data.attributes"
                    :key="attr.value"
                    class="group relative rounded border p-4 text-center dark:border-[#12152e] dark:bg-[#32363a]"
                  >
                    <div class="text-sm text-gray-500">
                      {{ attr.trait_type }}
                    </div>
                    <div class="text-sm font-medium">
                      {{ attr.value }}
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
        <Accordion value="0">
          <AccordionPanel
            value="0"
            class="!rounded-lg !border"
          >
            <AccordionHeader class="!bg-gray-100 hover:!bg-gray-200 dark:!bg-[#232528]">
              Attributes
            </AccordionHeader>
            <AccordionContent class="!p-0 !transition-none">
              <div class="p-4">
                <div class="flex flex-col">
                  <div
                    v-for="info of nftDetails"
                    :key="info.label"
                    class="flex justify-between"
                  >
                    <span>{{ info.label }}</span>
                    <span>{{ (info).format ? info.format(info.value) : info.value }}</span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
    <Accordion value="0">
      <AccordionPanel
        value="0"
        class="!rounded-lg !border"
      >
        <AccordionHeader class="!bg-gray-100 hover:!bg-gray-200 dark:!bg-[#232528]">
          Activities
        </AccordionHeader>
        <AccordionContent class="!p-0 !transition-none">
          <div class="p-4">
            <DataTable
              :value="activites"
              scrollable
              :pt="{
                table: { style: 'min-width: 50rem' },
                bodyRow: ({ props }) => ({
                  class: '!text-center',
                }),
              }"
            >
              <Column
                field="type"
                header="Type"
              />
              <Column
                field="price"
                header="Price"
              />
              <Column
                field="date"
                header="Date"
              />
              <Column
                field="marketplace"
                header="Marketplace"
              />
              <Column
                field="transaction"
                header="Transaction"
              />
              <Column
                field="mintAddress"
                header="Mint Address"
              />
            </DataTable>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
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

const formatAddress = (address: string) => {
  if (!address || address.length < 6) return address
  return `${address.slice(0, 6)}...${address.slice(-3)}`
}

const nftDetails = ref({
  tokenAddress: {
    label: 'Token Address',
    value: 'G8fqjwZx24oGg8AG95d96eY8H3xMJyfnkvQyGWQQvATj',
    format: formatAddress,
  },
  owner: {
    label: 'Owner',
    value: '8xrt6F5vwmxXj6dBuF5qrVDhrgzP6w1xhrdY9hp5TYp9',
    format: formatAddress,
  },
  creatorFees: {
    label: 'Creator Fees',
    value: '2.5%',
  },
  marketplaceFees: {
    label: 'Marketplace Fees',
    value: '1.5%',
  },
  mutableStatus: {
    label: 'Mutable Status',
    value: false,
  },
  tokenStandard: {
    label: 'Token Standard',
    value: 'Metaplex NFT Standard',
  },
})
const activites = ref([
  {
    type: 'Sale',
    price: 95.5,
    date: '2024-02-15',
    marketplace: 'Magic Eden',
    transaction: 'Ax9...j2K',
    mintAddress: 'G8f...ATj',
  },
  {
    type: 'Listing',
    price: 93.5,
    date: '2024-02-14',
    marketplace: 'Magic Eden',
    transaction: 'Bx7...k4M',
    mintAddress: 'G8f...ATj',
  },
  {
    type: 'Offer',
    price: 90.0,
    date: '2024-02-13',
    marketplace: 'OpenSea',
    transaction: 'Cx5...h6N',
    mintAddress: 'G8f...ATj',
  },
])
</script>

<style></style>
