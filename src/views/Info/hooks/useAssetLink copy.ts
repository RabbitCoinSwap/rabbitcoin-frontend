import { useState, useEffect } from 'react';

// Endpoint to check if asset exists and get URL to CMC page
// Returns a 400 status code if the token is not on CMC
const CMC_ENDPOINT = 'https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/contract?address=';
const GECKO_ENDPOINT = 'https://api.coingecko.com/api/v3/coins/polygon/contract/';

/**
 * Checks if the asset exists on CoinMarketCap or CoinGecko.
 * If found, returns its URL; otherwise, returns undefined.
 * @param address The token address (all lowercase; checksummed addresses are not supported by CMC)
 * @param source The data source to check (e.g., 'cmc' for CoinMarketCap, 'gecko' for CoinGecko)
 */
const useAssetLink = (
  address: string,
  source: 'cmc' | 'gecko',
): string | undefined => {
  const [assetPageUrl, setAssetPageUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchLink = async () => {
      let apiUrl;
      if (source === 'cmc') {
        apiUrl = `${CMC_ENDPOINT}${address}`;
      } else if (source === 'gecko') {
        apiUrl = `${GECKO_ENDPOINT}${address}`;
      }

      if (apiUrl) {
        try {
          const result = await fetch(apiUrl);
          if (result.status === 200) {
            const { data } = await result.json();
            setAssetPageUrl(data.url);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    if (address) {
      fetchLink();
    }
  }, [address, source]);

  return assetPageUrl;
};

export default useAssetLink;






/**
 * Check if asset exists on CMC, if exists
 * return  url, if not return undefined
 * @param address token address (all lowercase, checksummed are not supported by CMC)
 */
/*

const useCMCLink = (address: string): string | undefined => {
  const [cmcPageUrl, setCMCPageUrl] = useState<string | undefined>(undefined)

  useEffect(() => {
    const fetchLink = async () => {
      const result = await fetch(`${CMC_ENDPOINT}${address}`)
      // if link exists, format the url
      if (result.status === 200) {
        result.json().then(({ data }) => {
          setCMCPageUrl(data.url)
        })
      }
    }
    if (address) {
      fetchLink()
    }
  }, [address])

  return cmcPageUrl
}

export default useCMCLink

*/