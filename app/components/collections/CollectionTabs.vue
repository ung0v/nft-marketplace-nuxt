<template>
  <div class="flex">
    <Tabs
      v-model:value="tabVal"
      class="flex-1"
    >
      <TabList class="sticky top-20 z-50">
        <Tab
          value="0"
          class="!border-0 !border-none !text-[unset]"
          @click="toggleFilter"
        >
          <span>
            <i
              :class="!isShowFilter ? 'pi pi-filter': 'pi pi-filter-fill'"
            />
          </span>
        </Tab>
        <Tab value="0">
          Item
        </Tab>
        <Tab value="2">
          Activity
        </Tab>
        <div class="ml-auto flex items-center p-4">
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-4">
              <div>🧹 Sweep</div>
              <Slider
                v-model="sweep"
                class="w-40"
              />
              <span class="font-bold">
                (2)
              </span>
            </div>
            <div>
              <Select
                :default-value="options[0]"
                :options="options"
                option-label="name"
                placeholder="Select a City"
                class="w-full md:w-56"
              />
            </div>
            <div class="flex items-center gap-4">
              <ButtonGroup>
                <Button
                  icon="pi pi-table"
                  :outlined="viewMode === 'grid'"
                  @click="handleViewMode('table')"
                />
                <Button
                  icon="pi pi-th-large"
                  :outlined="viewMode === 'table'"
                  @click="handleViewMode('grid')"
                />
              </ButtonGroup>
            </div>
          </div>
        </div>
      </TabList>
      <TabPanels
        class="!p-0"
      >
        <TabPanel
          value="0"
          keep-alive
        >
          <div class="flex">
            <div
              class="sticky top-0 max-h-[calc(100vh-374px)] overflow-y-auto overflow-x-hidden transition-[width] duration-500"
              :class="isShowFilter ? 'opacity-100 w-[300px]': 'opacity-0 !w-0'"
            >
              <CollectionDetailFilters />
            </div>
            <div class="m-0 flex-1 px-4">
              <CollectionDetailList :view-mode="viewMode" />
            </div>
            <div
              v-if="cartList?.length > 0"
              class="py-4"
            >
              <CollectionCheckout />
            </div>
          </div>
        </TabPanel>
        <TabPanel
          value="1"
        >
          <p class="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script lang="ts" setup>
type ViewModeType = 'table' | 'grid'

const cartList = useState<NFTMetadata[]>('cartList')
const viewMode = ref<ViewModeType>('table')
const tabVal = ref('0')
const sweep = ref(0)
const options = [
  { name: 'Price low to high', value: 'lowtohigh' },
  { name: 'Price high to low', value: 'hightolow' },
]

const handleViewMode = (newViewMode: ViewModeType) => {
  viewMode.value = newViewMode
}

const isShowFilter = ref(true)

const toggleFilter = () => {
  isShowFilter.value = !isShowFilter.value
}
</script>

<style>
.p-tablist-active-bar {
  width: 0 !important;
}
</style>
