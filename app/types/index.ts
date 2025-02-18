export {}
declare global {
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
}
