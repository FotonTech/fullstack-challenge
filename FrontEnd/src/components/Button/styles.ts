import { Button } from 'native-base'
import styled from 'styled-components'
import { COLORS, FONTS, TYPOGRAPHY, VERTICAL_SPACING } from '../../constants'

export interface ButtonStyles {
  marginTop?: string
}

export const CustomButton = styled(Button).attrs({
  _text: { fontFamily: FONTS.bold, fontSize: TYPOGRAPHY.subtitleSize24 }
})<ButtonStyles>`
  background-color: ${COLORS.secondaryPink};
  margin-top: ${VERTICAL_SPACING.spacing20}px;
`
