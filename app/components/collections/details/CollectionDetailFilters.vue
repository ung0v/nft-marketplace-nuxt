<template>
  <div class="py-4">
    <div class="flex flex-col gap-y-4">
      <div class="mb-2 px-4">
        <div class="mb-2">
          <span class="text-lg font-bold">Search</span>
        </div>
        <InputGroup>
          <InputText placeholder="Keyword" />
          <!-- <InputGroupAddon>
            <Button
              icon="pi pi-search"
              severity="secondary"
              variant="text"
            />
          </InputGroupAddon> -->
        </InputGroup>
      </div>
      <div class="mb-2 px-4">
        <div class="mb-2">
          <span class="text-lg font-bold">Price range</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1 font-bold">
            <SolanaIcon /> 0
          </span>
          <Slider
            v-model="rangeVal"
            v-tooltip.bottom="'Price range: ' + rangeVal[0] + ' - ' + rangeVal[1]"
            range
            class="flex-1"
            :min="0"
            :max="50"
          />
          <span class="flex items-center gap-1 font-bold">
            <SolanaIcon /> 50
          </span>
        </div>
      </div>
      <div class="mb-2 flex items-center justify-between px-4">
        <label
          for="buynow"
          class="flex-1 text-lg font-bold"
        > Buy now </label>
        <Checkbox
          v-model="isBuyNow"
          input-id="buynow"
          binary
        />
      </div>

      <div class="flex flex-col gap-y-2">
        <Accordion
          :value="['0']"
          multiple
          expand-icon="pi pi-plus"
          collapse-icon="pi pi-minus"
        >
          <AccordionPanel
            v-for="filter in nftFilters"
            :key="filter.name"
            :value="filter.name"
          >
            <AccordionHeader>
              <span class="mb-2 flex w-full items-center justify-between text-lg">
                {{ filter.name }}
                <Badge
                  :value="filter.attributes.length"
                  severity="contrast"
                  class="ml-auto mr-3"
                />
              </span>
            </AccordionHeader>
            <AccordionContent class="">
              <span
                v-for="attribute in filter.attributes"
                :key="attribute"
                class="mb-2 flex items-center justify-between px-4"
              >
                <label
                  :for="attribute.toString()"
                  class="flex-1"
                > {{ attribute }} </label>
                <Checkbox
                  :input-id="attribute.toString()"
                  binary
                />
              </span>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
      <div
        class="sticky bottom-0 bg-white p-4 dark:bg-surface-900"
      >
        <Button
          label="Submit"
          type="submit"
          class="w-full p-0"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const rangeVal = ref([0, 20])
const isBuyNow = ref(false)

const nftFilters = ref([
  {
    name: 'Amount of attributes',
    description: 'Amount of attributes',
    attributes: [6, 1, 3, 4, 5, 2],
  },
  {
    name: 'Background',
    description: 'Background color of the NFT',
    attributes: ['Soft Gray', 'Grayish Green', 'Grayish Blue'],
  },
  {
    name: 'Body',
    description: 'Main body type',
    attributes: ['Robot', 'Human', 'Alien', 'Animal', 'Crystal', 'Cyborg', 'Ghost'],
  },
  {
    name: 'Eyes',
    description: 'Eye style and color',
    attributes: ['Sapphire', 'Ruby', 'Emerald', 'Digital'],
  },
  {
    name: 'Mouth',
    attributes: ['Smile', 'Neutral', 'Grin', 'Cyber', 'Pixel', 'Frown'],
  },
  {
    name: 'Headwear',
    description: 'Accessories for head',
    attributes: ['Crown', 'Beanie', 'Helmet'],
  },
  {
    name: 'Outfit',
    attributes: ['Armor', 'Casual', 'Formal', 'Futuristic', 'Mystical', 'Tribal', 'Royal', 'Basic'],
  },
  {
    name: 'Accessories',
    description: 'Additional decorative elements',
    attributes: ['Wings', 'Sword'],
  },
  {
    name: 'Special Effects',
    attributes: ['Glowing', 'Sparkles', 'Smoke', 'Lightning', 'Flames', 'Rainbow', 'Wind'],
  },
  {
    name: 'Rarity',
    description: 'NFT rarity level',
    attributes: ['Common', 'Uncommon', 'Rare', 'Epic'],
  },
  {
    name: 'Theme',
    attributes: ['Cyberpunk', 'Fantasy', 'Sci-fi'],
  },
])
</script>

<style scoped>
.p-accordionheader {
  @apply !px-4
}

.p-accordioncontent-content {
  @apply !px-0 space-y-4;
}
</style>
