<template>
  <header class="sticky top-0 z-[99] h-20 bg-white !bg-opacity-75 px-10 backdrop-blur-md dark:bg-surface-900">
    <div class="mx-auto flex size-full px-4">
      <div class="flex h-full flex-1 items-center justify-between py-4">
        <nuxt-link
          to="/"
          class="text-2xl font-bold text-gray-800 dark:text-white"
        >NFT Marketplace</nuxt-link>
        <div class="">
          <InputText
            placeholder="Search collection, nft, user..."
            type="text"
            :v-model="search"
            class="w-[350px] !rounded-full !border-0 !px-6 !py-3 !text-sm"
            variant="filled"
          />
        </div>
        <div class="flex items-center space-x-4">
          <nuxt-link to="/collections">
            <Button
              label="Collections"
              variant="text"
              class="!font-bold"
              severity="secondary"
            />

          </nuxt-link>
          <nuxt-link to="/list-nft">
            <Button
              label="Sell items"
              variant="text"
              class="!font-bold"
              severity="secondary"
            />

          </nuxt-link>
          <Button
            :icon="colorMode.value === 'light' ? 'pi pi-sun' : 'pi pi-moon'"
            severity="contrast"
            variant="text"
            rounded
            aria-label="Star"
            icon-class="text-[22px]"
            @click="toggleColorMode"
          />

          <Button
            v-if="!status || status === 'disconnected'"
            label="Connect Wallet"
            severity="contrast"
            @click="handleConnectWallet"
          />

          <div v-else-if="status === 'connecting'">
            Connecting...
          </div>
          <div
            v-else-if="status === 'connected'"
            class="flex items-center gap-2"
          >
            {{ formatAddress(address as string) }}
            <Button

              label="Disconnect Wallet"
              severity="contrast"
              @click="handleDisconnectWallet"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { injected, useAccount, useConnect, useDisconnect } from '@wagmi/vue'

const search = ref('')
const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}

const { address, status } = useAccount()
const { disconnect } = useDisconnect()
const { connect } = useConnect()

const handleConnectWallet = () => {
  connect({ connector: injected() })
}

const handleDisconnectWallet = () => {
  disconnect()
}
</script>

<style></style>
