import { useCallback, useRef, useState } from 'react'
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBackButton,
  ModalCloseButton,
  ModalBody,
  InjectedModalProps,
  Heading,
  Box,
} from '@pancakeswap/uikit'
import styled from 'styled-components'
import usePrevious from 'hooks/usePreviousValue'
import { useTranslation } from 'contexts/Localization'
import { SelectCollectionModalView } from './types'
import CollectionList from './CollectionList'
import { FixedSizeList } from 'react-window'
import { useFarms, useFarmUser } from 'state/nftFarms/hooks'
import { DeserializedNftFarm } from 'state/types'


const StyledModalContainer = styled(ModalContainer)`
  max-width: 420px;
  width: 100%;
`

const StyledModalBody = styled(ModalBody)`
  padding: 24px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

interface CollectionSelectModalProps extends InjectedModalProps {
  selectedCollection?: DeserializedNftFarm | null
  onCollectionSelect: (collection: number, task: string) => void
  pid: number
}

export default function CollectionSelectModal({
  onDismiss = () => null,
  onCollectionSelect,
  selectedCollection,
  pid,
}: CollectionSelectModalProps) {
  const [modalView, setModalView] = useState<SelectCollectionModalView>(SelectCollectionModalView.select)


  const { data: nftFarms } = useFarms()

  const notToListFarms = ["Starter SHIB", "Bronze SHIB", "Silver SHIB", "Gold SHIB", "Collectors Pool"]
  const collectionPidOrigins = {
    6: 1,
    7: 2,
    8: 3,
    9: 4,
    10: 4,
  }

  const mainNftStakeFarm = nftFarms.filter(
    (farm) => farm.pid == pid
  )

  const mainNftStakeFarmReplaced = notToListFarms.includes(mainNftStakeFarm[0].lpSymbol) ? nftFarms.filter((farm) => farm.pid == collectionPidOrigins[mainNftStakeFarm[0].pid]) : null

  const communityTokenFarms = nftFarms.filter((farm) =>
    farm.pid <= 4 && (mainNftStakeFarmReplaced === null || farm.pid !== mainNftStakeFarmReplaced[0].pid)
  )


  const eligibleCollections = [collectionPidOrigins[mainNftStakeFarm[0].pid] ?? mainNftStakeFarm[0].pid, ...mainNftStakeFarm[0]["supportedCollectionPids"]]
  
  const externalCommunityCollectionPids = mainNftStakeFarm[0]["supportedCollectionPids"].filter((pid) => pid > 4)
  const externalNftStakeFarm = nftFarms.filter(
    (farm) => externalCommunityCollectionPids.includes(farm.pid)
  )


  const collectionList = mainNftStakeFarmReplaced 
    ? [...mainNftStakeFarmReplaced, ...communityTokenFarms] 
    : [...mainNftStakeFarm, ...externalNftStakeFarm, ...communityTokenFarms]
  
  const collectionPowers = mainNftStakeFarm[0]["collectionPowers"] ?? collectionList.map((collection) => {
    switch (collection.pid) {
      case 1:
        return 1;
      case 2:
        return 3;
      case 3:
        return 6;
      case 4:
        return 12;
      default:
        return 15;
    }
  })

  const { allowance } = useFarmUser(pid)

  // refs for fixed size lists
  const fixedList = useRef<FixedSizeList>()

  const handleCurrencySelect = useCallback(
    (collection: number, task: string) => {
      onDismiss?.()
      onCollectionSelect(collection, task)
    },
    [onDismiss, onCollectionSelect],
  )

  // for token import view
  const prevView = usePrevious(modalView)

  const { t } = useTranslation()

  const config = {
    [SelectCollectionModalView.select]: { title: t('Select Collection'), onBack: undefined },
  }

  return (
    <StyledModalContainer minWidth="320px">
      <ModalHeader>
        <ModalTitle>
          {config[modalView].onBack && <ModalBackButton onBack={config[modalView].onBack} />}
          <Heading>{config[modalView].title}</Heading>
        </ModalTitle>
        <ModalCloseButton onDismiss={onDismiss} />
      </ModalHeader>
      <StyledModalBody>
        <Box margin="12px -12px">
          <CollectionList
            height={280}
            collections={collectionList}
            onCurrencySelect={handleCurrencySelect}
            allowance={allowance}
            collectionPowers={collectionPowers}
            fixedListRef={fixedList}
            eligiblePids={eligibleCollections}
          />
        </Box>
      </StyledModalBody>
    </StyledModalContainer>
  )
}
