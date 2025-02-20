import { http, cookieStorage, createConfig, createStorage } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
import { metaMask } from '@wagmi/vue/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    metaMask(),
  ],
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

declare module '@wagmi/vue' {
  interface Register {
    config: typeof config
  }
}
