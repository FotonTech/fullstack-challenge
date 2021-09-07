import { Image, ScrollView, Text } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components'
import {
  COLORS,
  HORIZONTAL_SPACING,
  TYPOGRAPHY,
  VERTICAL_SPACING,
  FONTS
} from '../../../../constants'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export const BookInfoContainer = styled(LinearGradient).attrs({
  colors: [COLORS.transparent, COLORS.transparent, COLORS.primaryBeige]
})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${VERTICAL_SPACING.spacing75}px;
  padding-left: ${HORIZONTAL_SPACING.spacing20}px;
  padding-right: ${HORIZONTAL_SPACING.spacing20}px;
  height: ${VERTICAL_SPACING.fullHeight}px;
`

export const BookImage = styled(Image)`
  resize-mode: contain;
  width: ${wp('60%')}px;
  height: ${hp('25.75%')}px;
`

export const BookInfoSection = styled(ScrollView)`
  margin-top: ${VERTICAL_SPACING.spacing20}px;
  margin-bottom: ${hp('30%')}px;
`

export const BookName = styled(Text)`
  font-size: ${TYPOGRAPHY.subtitleSize24}px;
  font-family: ${FONTS.bold};
`

export const BookAuthor = styled(Text)`
  font-size: ${TYPOGRAPHY.bodySize16}px;
  font-family: ${FONTS.bold};
  color: ${COLORS.secondaryPink};
`

export const BookDescription = styled(Text)`
  margin-top: ${VERTICAL_SPACING.spacing10}px;
  font-size: ${TYPOGRAPHY.bodySize14}px;
  font-family: ${FONTS.light};
  color: ${COLORS.darkGray};
`
