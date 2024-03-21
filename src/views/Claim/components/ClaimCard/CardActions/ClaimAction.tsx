import { Button, AutoRenewIcon, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useClaimReward } from '../../../hooks/useClaimReward'

interface ClaimActionProps {
  claimId: number
  claim: any
  claimData: any
  isLoading?: boolean
  isDisabled?: boolean
}

const ClaimAction: React.FC<ClaimActionProps> = ({ claimId, claim, claimData, isLoading = false, isDisabled = false }) => {
  const { t } = useTranslation()
  const nftAddresses = claimData.data[claimId].nftsToClaim[0]
  const nftIds = claimData.data[claimId].nftsToClaim[1]

  const { handleClaimReward, pendingTx } = useClaimReward(claim.cid, nftAddresses, nftIds, claim.rewardToken, claimData.data[claimId].version, claimData.refresh)

  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height="52px" />
      ) : (
        <Button
          isLoading={pendingTx}
          endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
          disabled={pendingTx || claim.isFinished}
          onClick={handleClaimReward}
          width="100%"
        >
          {t(`Claim ${parseFloat((claim.baseAmount * (claimData.data[claimId].userWeight || 1)).toFixed(2))} ${claim.rewardToken}`)}
        </Button>
      )}
    </>
  )
}

export default ClaimAction
