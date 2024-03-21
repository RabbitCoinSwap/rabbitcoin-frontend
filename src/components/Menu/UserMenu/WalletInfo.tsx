import { Box, Button, Flex, InjectedModalProps, LinkExternal, Message, Skeleton, Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import tokens from 'config/constants/tokens'
import { FetchStatus } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'
import useAuth from 'hooks/useAuth'
import useTokenBalance, { useGetBnbBalance, useGetMaticBalance } from 'hooks/useTokenBalance'

import { getBscScanLink, getPolygonScanLink } from 'utils'
import { formatBigNumber, getFullDisplayBalance } from 'utils/formatBalance'
import CopyAddress from './CopyAddress'

interface WalletInfoProps {
  hasLowMaticBalance: boolean
  onDismiss: InjectedModalProps['onDismiss']
}

const WalletInfo: React.FC<WalletInfoProps> = ({ hasLowMaticBalance, onDismiss }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  //const { balance, fetchStatus } = useGetBnbBalance()
  const { balance, fetchStatus } = useGetMaticBalance()
  const { balance: cakeBalance, fetchStatus: cakeFetchStatus } = useTokenBalance(tokens.rabbit.address)
  const { logout } = useAuth()

  const handleLogout = () => {
    onDismiss?.()
    logout()
  }

  return (
    <>
      <Text color="secondary" fontSize="12px" textTransform="uppercase" fontWeight="bold" mb="8px">
        {t('Your Address')}
      </Text>
      <CopyAddress account={account} mb="24px" />
      {hasLowMaticBalance && (
        <Message variant="warning" mb="24px">
          <Box>
            <Text fontWeight="bold">{t('MATIC Balance Low')}</Text>
            <Text as="p">{t('You need MATIC for transaction fees.')}</Text>
          </Box>
        </Message>
      )}
      <Flex alignItems="center" justifyContent="space-between">
        <Text color="textSubtle">{t('MATIC Balance')}</Text>
        {fetchStatus !== FetchStatus.Fetched ? (
          <Skeleton height="22px" width="60px" />
        ) : (
          <Text>{formatBigNumber(balance, 6)}</Text>
        )}
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb="24px">
        <Text color="textSubtle">{t('RABBIT Balance')}</Text>
        {cakeFetchStatus !== FetchStatus.Fetched ? (
          <Skeleton height="22px" width="60px" />
        ) : (
          <Text>{getFullDisplayBalance(cakeBalance, 18, 3)}</Text>
        )}
      </Flex>
      <Flex alignItems="center" justifyContent="end" mb="24px">
        <LinkExternal href={getPolygonScanLink(account, 'address')}>{t('View on PolygonScan')}</LinkExternal>
      </Flex>
      <Button variant="secondary" width="100%" onClick={handleLogout}>
        {t('Disconnect Wallet')}
      </Button>
    </>
  )
}

export default WalletInfo
