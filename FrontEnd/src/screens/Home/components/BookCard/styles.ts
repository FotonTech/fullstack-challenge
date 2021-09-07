import { Image, Text } from 'native-base'
import styled from 'styled-components'
import { FONTS, HORIZONTAL_SPACING, TYPOGRAPHY, VERTICAL_SPACING } from '../../../../constants'
import { TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export const BookCardContainer = styled(TouchableOpacity)`
  width: ${wp('25%')}px;
  display: flex;
  align-items: center;
  margin-bottom: ${VERTICAL_SPACING.spacing10}px;
  margin-left: ${HORIZONTAL_SPACING.spacing15}px;
`

export const BookImage = styled(Image)`
  resize-mode: contain;
  width: ${wp('25%')}px;
  height: ${hp('15%')}px;
`

export const BookName = styled(Text)`
font-size: ${TYPOGRAPHY.captionSize12}px;
font-family: ${FONTS.bold};
display: flex;
flex-wrap: wrap;
font-weight: bold;
`

export const BookAuthor = styled(Text)`
  font-size: ${TYPOGRAPHY.captionSize12}px;
  font-family: ${FONTS.regular};
  display: flex;
  flex-wrap: wrap;
`
