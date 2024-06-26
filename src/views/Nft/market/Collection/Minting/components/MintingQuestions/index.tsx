/* eslint-disable react/no-array-index-key */
import styled from 'styled-components'
import { Text, Heading, Card, CardHeader, CardBody, Flex, Image } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import FoldableText from 'components/FoldableSection/FoldableText'
import config from './config'

const ImageWrapper = styled.div`
  flex: none;
  order: 2;
  max-width: 414px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    order: 1;
  }
`

const DetailsWrapper = styled.div`
  order: 1;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    order: 2;
    margin-bottom: 0;
    margin-left: 40px;
  }
`

const IfoQuestions = ({ mintingData }) => {
  const { t } = useTranslation()
  let { faq } = mintingData

  return (
    <Flex alignItems={['center', null, null, 'start']} flexDirection={['column', null, null, 'row']}>
      {/*<ImageWrapper>
         <Image src="/images/ifos/ifo-bunny.png" alt="ifo bunny" width={414} height={500} />
      </ImageWrapper> */}
      <DetailsWrapper>
        <Card>
          <CardHeader>
            <Heading scale="lg" color="secondary">
              {t('FAQ')}
            </Heading>
          </CardHeader>
          <CardBody>
            {faq.map(({ title, description }, i, { length }) => {
              return (
                <FoldableText key={i} mb={i + 1 === length ? '' : '24px'} title={title}>
                  {description.map((desc, index) => {
                    return (
                      <Text key={index} color="textSubtle" as="p">
                        {desc}
                      </Text>
                    )
                  })}
                </FoldableText>
              )
            })}
          </CardBody>
        </Card>
      </DetailsWrapper>
    </Flex>
  )
}

export default IfoQuestions
