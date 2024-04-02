import { Token, ChainId } from '@rabbitcoin/sdk'
import getLpAddress from 'utils/getLpAddress'

const CAKE_AS_STRING = '0x28767E286113Ab01EE819b9398A22D6f27BaDb6E'
const BUSD_AS_STRING = '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39'
const CAKE_AS_TOKEN = new Token(ChainId.MAINNET, CAKE_AS_STRING, 18)
const BUSD_AS_TOKEN = new Token(ChainId.MAINNET, BUSD_AS_STRING, 18)
const CAKE_BUSD_LP = '0x804678fa97d91B974ec2af3c843270886528a9E6' // LP RabbitBUSD

describe('getLpAddress', () => {
  it('returns correct LP address, both tokens are strings', () => {
    expect(getLpAddress(CAKE_AS_STRING, BUSD_AS_STRING)).toBe(CAKE_BUSD_LP)
  })
  it('returns correct LP address, token1 is string, token 2 is Token', () => {
    expect(getLpAddress(CAKE_AS_STRING, BUSD_AS_TOKEN)).toBe(CAKE_BUSD_LP)
  })
  it('returns correct LP address, both tokens are Token', () => {
    expect(getLpAddress(CAKE_AS_TOKEN, BUSD_AS_TOKEN)).toBe(CAKE_BUSD_LP)
  })
  it('returns null if any address is invalid', () => {
    expect(getLpAddress('123', '456')).toBe(null)
    expect(getLpAddress(undefined, undefined)).toBe(null)
    expect(getLpAddress(CAKE_AS_STRING, undefined)).toBe(null)
    expect(getLpAddress(undefined, BUSD_AS_TOKEN)).toBe(null)
    expect(getLpAddress(CAKE_AS_STRING, '456')).toBe(null)
    expect(getLpAddress('123', BUSD_AS_TOKEN)).toBe(null)
  })
})
