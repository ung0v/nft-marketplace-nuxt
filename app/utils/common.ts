export const formatAddress = (address: string) => {
  if (!address || address.length < 6) return address
  return `${address.slice(0, 6)}...${address.slice(-3)}`
}
