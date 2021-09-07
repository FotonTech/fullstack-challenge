import { TYPOGRAPHY } from './../../constants'
import { HORIZONTAL_SPACING } from './../../constants'
import { COLORS, FONTS } from './../../constants'
import { Input } from 'native-base'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Feather'

export interface InputStyles {
  backgroundColor?: string
}

export const CustomInput = styled(Input).attrs({
  placeholderTextColor: COLORS.darkGray
})<InputStyles>`
  background-color: ${({ backgroundColor }) => backgroundColor || COLORS.white};
  font-size: ${TYPOGRAPHY.bodySize16}px;
  font-family: ${FONTS.regular};
`
export const InputIcon = styled(Icon)`
  padding-left: ${HORIZONTAL_SPACING.spacing20}px;
  color: ${COLORS.lightGray};
  font-size: ${TYPOGRAPHY.bodySize16}px;
`
