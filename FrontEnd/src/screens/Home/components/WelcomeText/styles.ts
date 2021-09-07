import { TYPOGRAPHY } from './../../../../constants/typography'
import { VERTICAL_SPACING } from './../../../../constants/spacing'
import { Text, View } from 'native-base'
import styled from 'styled-components'
import { COLORS, FONTS } from '../../../../constants'

interface WelcomeTextStyles {
  color?: string
}

export const WelcomeContainer = styled(View)`
  color: ${COLORS.black};
  display: flex;
  flex-direction: row;
  padding: ${VERTICAL_SPACING.spacing20}px 0;
`
export const WelcomeTexts = styled(Text)<WelcomeTextStyles>`
  font-size: ${TYPOGRAPHY.subtitleSize24}px;
  color: ${({ color }) => color || COLORS.darkGray};
  font-family: ${FONTS.bold};
`
