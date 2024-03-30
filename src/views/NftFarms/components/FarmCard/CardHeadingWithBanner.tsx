import styled from 'styled-components'
import { Tag, Flex, Heading, Skeleton, TokenImage, ProfileAvatar, CardBody } from '@pancakeswap/uikit'
import { Token } from '@rabbitcoin/sdk'
import { FarmAuctionTag, CoreTag } from 'components/Tags'
import Image from 'next/image'
import { mintingConfig } from 'config/constants'
import nftFarmsConfig from 'config/constants/nftFarms'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  nftToken?: string
  pid?: number
  disabled?: boolean
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const StyledImage = styled(Image)`
  border-radius: 8px;
`

export const CollectionAvatar = styled(ProfileAvatar)`
  left: 0;
  position: absolute;
  top: -32px;
  border: 4px white solid;
`

const CardHeadingWithBanner: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  nftToken,
  pid,
  disabled = false,
}) => {
  const collectionData = mintingConfig.find((collection) => collection.stake_pid === pid)
  const nftFarmData = nftFarmsConfig.find((nftFarm) => nftFarm.pid === pid)
  const banner = nftFarmData['banner'] ? nftFarmData['banner'] : collectionData?.banner.small
  const avatar = nftFarmData['avatar'] ? nftFarmData['avatar'] : collectionData?.avatar

  return (
    <CardBody p="0px">
      <StyledImage src={banner} height={125} width={375} />
      <Flex
        position="relative"
        height="65px"
        justifyContent="center"
        alignItems="flex-end"
        py="8px"
        flexDirection="column"
      >
        <CollectionAvatar src={avatar} width={86} height={86} />
        <Heading color={disabled ? 'textDisabled' : 'body'} as="h3" mb={'8px'}>
          {lpLabel}
        </Heading>
      </Flex>
    </CardBody>
  )
}

export default CardHeadingWithBanner
