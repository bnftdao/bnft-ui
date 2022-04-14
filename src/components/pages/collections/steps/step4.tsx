import router from 'next/router'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Flex, Text } from 'theme-ui'
import { permalink } from '../../../../constants/routes'
import { Button } from '../../../../theme/ui/common/button'
import { BoundNFTContext } from '../create-boundnft'
import { Screen } from '../types'
import Image from 'next/image'
import { LabelInfo } from '../../../../theme/ui/common/label-info'
import { MotionBox } from 'components/common/motion-components'


export const CreateBoundNFTStep4: React.FC = () => {
  const { t } = useTranslation('common')
  const { setScreenState } = useContext(BoundNFTContext)
  return (
    <MotionBox 
      initial={{ x: '100vh' }} 
      animate={{    
        x: 0,
      transition: { type: 'spring', stiffness: 50, duration: 0.5 }}}
    >
        <Flex sx={{mt: 80, justifyContent: ['space-between'], alignItems: ['center', 'center', 'flex-start'], width: '100%', flexDirection: ['column', 'column', 'row']}}>


          <Box variant='frames.image' sx={{width: '100%', maxWidth: [320, 330, 202], mr: [0, 0, 30]}}>
            <Box sx={{width: [300, 300, 182], height: [300, 300, 182], position: 'relative'}}>
              <Image src='/assets/images/collections/big/punk.svg' layout='fill'/>
            </Box>
          </Box>
        
        <Box variant='frames.normal' sx={{width: '100%', maxWidth: 728, mt: [20, 20, 0]}}>
          <Flex sx={{ justifyContent: 'space-between', width: '100%', flexDirection: ['column', 'column', 'column', 'row']}}>
            <Flex sx={{ justifyContent: 'space-between', minWidth: 260}}>
              <LabelInfo label='Name' info='Cryptopunks' />
              <LabelInfo label='NO. OF TOKENS' info='10,000' align='right'/>
            </Flex>

            <Button text='View on Opensea' arrowColor='white' outlined sx={{maxWidth: 286, mt: [20, 20, 20, 0]}} />
          </Flex>

          <Flex sx={{ mt: 25}}>
          <LabelInfo label='CONTRACT' info='0x83494d0c61f87ff3e44992552ee0751816f478e4482349763d9bdd219986b5ff' textColor='green.100' />
          </Flex>

        </Box>
      </Flex>

      <Box variant='frames.normal' sx={{textAlign: 'center', mt: 40}}>
        <Text as='span' variant='text.body' sx={{ color: 'white', lineHeight: 1.5}} dangerouslySetInnerHTML={{ __html: t('paragraph.create-boundnft-success', { boundAsset: 'BOUNDWPUNKS' })}}/>
      </Box>

      <Flex sx={{ width: '100%', mt: 40, alignItems: ['center', 'center', 'center', null], justifyContent: ['space-between'], flexDirection: ['column', 'column', 'column', 'row']}}>
        <Button text={t('button.back-to-collections').toUpperCase()} outlined switchArrow onClick={() => router.push(permalink.collections)} />
        <Button text={t('button.create-another-one').toUpperCase()} outlined sx={{ mt: [20, 20, 20, 0]}} onClick={() => setScreenState(Screen.fetchMetadata)}/>
      </Flex>
    </MotionBox>
  )
}