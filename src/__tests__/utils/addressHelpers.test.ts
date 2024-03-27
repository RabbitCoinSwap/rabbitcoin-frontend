import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    137: '0x28767E286113Ab01EE819b9398A22D6f27BaDb6E',
    97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  }

  it(`get address for mainnet (chainId 137)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '137'
    const expected = address[137]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '97'
    const expected = address[97]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '31337'
    const expected = address[137]
    expect(getAddress(address)).toEqual(expected)
  })
})
