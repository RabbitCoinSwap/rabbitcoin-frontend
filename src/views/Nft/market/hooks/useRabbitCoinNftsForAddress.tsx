import { useMemo } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useGetCollections } from 'state/nftMarket/hooks'
import { ApiCollections, ApiResponseSpecificToken, NftLocation, NftToken, TokenIdWithCollectionAddress } from 'state/nftMarket/types'
import { Profile } from 'state/types'
import { isAddress } from 'utils'
import useSWR from 'swr'
import { FetchStatus } from 'config/constants/types'
import { laggyMiddleware } from 'hooks/useSWRContract'
import { range, uniq } from 'lodash'
import { multicallPolygonv1 } from 'utils/multicall'
import rabbitCoinNftAbi from 'config/abi/rabbitCoinNft.json'
import erc721Abi from 'config/abi/erc721.json'
import { attachMarketDataToWalletNfts, combineNftMarketAndMetadata, getNftsMarketData } from 'state/nftMarket/helpers'
import { getRabbitCoinNFTContract } from 'utils/contractHelpers'
import { simplePolygonRpcProvider } from 'utils/providers'
import axios from 'axios'
import { IPFS_GATEWAY } from 'config'
import erc721ABI from 'config/abi/erc721.json'

const useNftsForAddress = (account: string, profile: Profile, isProfileFetching: boolean) => {
  const { data: collections } = useGetCollections()

  const hasProfileNft = profile?.tokenId
  const profileNftTokenId = profile?.tokenId?.toString()
  const profileNftCollectionAddress = profile?.collectionAddress

  const profileNftWithCollectionAddress = useMemo(() => {
    if (hasProfileNft) {
      return {
        tokenId: profileNftTokenId,
        collectionAddress: profileNftCollectionAddress,
        nftLocation: NftLocation.PROFILE,
      }
    }
    return null
  }, [profileNftTokenId, profileNftCollectionAddress, hasProfileNft])

  const { status, data, mutate } = useSWR(
    !isProfileFetching && !isEmpty(collections) && isAddress(account) ? [account, 'userNfts'] : null,
    async () => getCompleteAccountNftData(account, collections, profileNftWithCollectionAddress),
    { use: [laggyMiddleware] },
  )

  return { nfts: data ?? [], isLoading: status !== FetchStatus.Fetched, refresh: mutate }
}

export default useNftsForAddress


const getCompleteAccountNftData = async (
  account: string,
  collections: ApiCollections,
  profileNftWithCollectionAddress?: TokenIdWithCollectionAddress,
): Promise<NftToken[]> => {
  const walletNftIdsWithCollectionAddress = await fetchWalletTokenIdsForCollections(account, collections)
  
  if (profileNftWithCollectionAddress?.tokenId) {
    walletNftIdsWithCollectionAddress.unshift(profileNftWithCollectionAddress)
  }
  

  const walletTokenIds = walletNftIdsWithCollectionAddress
    .filter((walletNft) => {
      // Profile Pic NFT is no longer wanted in this array, hence the filter
      return profileNftWithCollectionAddress?.tokenId !== walletNft.tokenId
    })
    .map((nft) => nft.tokenId)

  

  const metadataForAllNfts = await getNftsFromDifferentCollectionsApi([
    //...forSaleNftIds,
    ...walletNftIdsWithCollectionAddress,
  ])


  const completeNftData = combineNftMarketAndMetadata(
    metadataForAllNfts,
    [],//marketDataForSaleNfts,
    [],//walletNftsWithMarketData,
    walletTokenIds,
    [],//tokenIdsForSale,
    profileNftWithCollectionAddress?.tokenId,
  )


  return completeNftData
}

export const fetchWalletTokenIdsForCollections = async (
  account: string,
  collections: ApiCollections,
): Promise<TokenIdWithCollectionAddress[]> => {
  const balanceOfCalls = Object.values(collections).map((collection) => {
    const { address: collectionAddress } = collection
    return {
      address: collectionAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const balanceOfCallsResultRaw = await multicallPolygonv1(erc721Abi, balanceOfCalls)
  // TODO: Deploy multicallv2 and activate instead of v1
  //const balanceOfCallsResultRaw = await multicallv2(erc721Abi, balanceOfCalls, { requireSuccess: false })
  const balanceOfCallsResult = balanceOfCallsResultRaw.flat()

  const tokenIdCalls = Object.values(collections)
    .map((collection, index) => {
      const balanceOf = balanceOfCallsResult[index]?.toNumber() ?? 0
      const { address: collectionAddress } = collection

      return [0].map((tokenIndex) => {
        return {
          address: collectionAddress,
          name: 'walletOfOwner',
          params: [account],
        }
      })
    })
    .flat()

    let tokenIdResultRaw
  try {
    tokenIdResultRaw = await multicallPolygonv1(rabbitCoinNftAbi, tokenIdCalls)
  } catch (error) {
    console.log(error)
  }
  // TODO: Deploy multicallv2 and activate instead of v1
  //const tokenIdResultRaw = await multicallv2(erc721Abi, tokenIdCalls, { requireSuccess: false })
  const tokenIdResult = tokenIdResultRaw.flat()

  const nftLocation = NftLocation.WALLET

  const walletNfts = tokenIdResult.reduce((acc, tokenIdBn, index) => {
    if (tokenIdBn) {
      const { address: collectionAddress } = tokenIdCalls[index]
      tokenIdBn.forEach((tokenId)=>{
        acc.push({ tokenId: tokenId.toString(), collectionAddress, nftLocation, symbol: collections[index]["symbol"] })
      })
      
    }
  
    return acc
  }, [])
  
  return walletNfts
}

export const getNftsFromDifferentCollectionsApi = async (
  from: { collectionAddress: string; tokenId: string }[],
): Promise<NftToken[]> => {

  const imageCalls = from.map((token) => {
    return {
      address: token.collectionAddress,
      name: 'tokenURI',
      params: [token.tokenId],
    }
  })

  const rawTokenURIs = await multicallPolygonv1(erc721ABI, imageCalls)
  
  const items = await Promise.all(from.map(async (token, index) => {

    let meta = null;
    try {
      //@ts-ignore
      const tokenURI = rawTokenURIs[index][0];
      meta = await axios.get(tokenURI)
      return {
        tokenId: token.tokenId,
        name: meta.data.name,
        //@ts-ignore
        collectionName: token.symbol,
        collectionAddress: token.collectionAddress,
        description: meta.data.description,
        attributes: meta.data.attributes,
        image: {
          original: meta.data.image.replace("ipfs://", `${IPFS_GATEWAY}/`),
          thumbnail: meta.data.image.replace("ipfs://", `${IPFS_GATEWAY}/`),
        }
      }
   } catch (error) {
      console.log('IPFS link is broken!', error);
      return {
        tokenId: token.tokenId,
        name: "Name data cannot be fetched",
        //@ts-ignore
        collectionName: token.symbol,
        collectionAddress: token.collectionAddress,
        description: "Description data cannot be fetched",
        attributes: "Attribute data cannot be fetched",
        image: {
          original: 'images/nfts/no-profile-md.png',
          thumbnail: 'images/nfts/no-profile-md.png',
        }
      }
   }



  }))
  
  return items
}
