import { gql } from 'graphql-request'
import { useEffect, useState } from 'react'
import { infoClient } from 'utils/graphql'
import { useBlocksFromTimestamps } from 'views/Info/hooks/useBlocksFromTimestamps'
import { getDeltaTimestamps } from 'views/Info/utils/infoQueryHelpers'

export interface BnbPrices {
  current: number
  oneDay: number
  twoDay: number
  week: number
}

const BNB_PRICES = gql`
  query prices($block24: Int!, $block48: Int!, $blockWeek: Int!) {
    current: bundle(id: "1") {
      bnbPrice
    }
    oneDay: bundle(id: "1", block: { number: $block24 }) {
      bnbPrice
    }
    twoDay: bundle(id: "1", block: { number: $block48 }) {
      bnbPrice
    }
    oneWeek: bundle(id: "1", block: { number: $blockWeek }) {
      bnbPrice
    }
  }
`

interface PricesResponse {
  current: {
    bnbPrice: string
  }
  oneDay: {
    bnbPrice: string
  }
  twoDay: {
    bnbPrice: string
  }
  oneWeek: {
    bnbPrice: string
  }
}

const fetchBnbPrices = async (
  block24: number,
  block48: number,
  blockWeek: number,
  ): Promise<{ bnbPrices: BnbPrices | undefined; error: string | null }> => {
  try {
    const data = await infoClient.request<PricesResponse>(BNB_PRICES, {
      block24,
      block48,
      blockWeek,
    })
    return {
      error: null,
      bnbPrices: {
        current: parseFloat(data.current?.bnbPrice ?? '0'),
        oneDay: parseFloat(data.oneDay?.bnbPrice ?? '0'),
        twoDay: parseFloat(data.twoDay?.bnbPrice ?? '0'),
        week: parseFloat(data.oneWeek?.bnbPrice ?? '0'),
      },
    }
  } catch (error) {
    console.error('Failed to fetch BNB prices', error)
    return {
      error: 'Failed to fetch BNB prices',
      bnbPrices: undefined,
    }
  }
}

/**
 * Returns BNB prices at current, 24h, 48h, and 7d intervals
 */
export const useBnbPrices = (): { prices: BnbPrices | undefined; loading: boolean; error: string | null } => {
  const [prices, setPrices] = useState<BnbPrices | undefined>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [t24, t48, tWeek] = getDeltaTimestamps()
  const { blocks, error: blockError } = useBlocksFromTimestamps([t24, t48, tWeek])

  useEffect(() => {
    const fetch = async () => {
      const [block24, block48, blockWeek] = blocks
      const { bnbPrices, error: fetchError } = await fetchBnbPrices(block24.number, block48.number, blockWeek.number)
      setLoading(false)
      if (fetchError) {
        setError(fetchError)
      } else {
        setPrices(bnbPrices)
      }
    }
    if (!prices && !loading && blocks && !blockError) {
      fetch()
    }
  }, [loading, prices, blocks, blockError])

  return { prices, loading, error }
}
