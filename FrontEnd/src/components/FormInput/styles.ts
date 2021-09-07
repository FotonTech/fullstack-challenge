import { VERTICAL_SPACING } from './../../constants/spacing'
import { Text, View } from 'native-base'
import styled from 'styled-components'
import { COLORS, FONTS } from '../../constants'

interface FormInputStyles {
  marginTop?: string
}

export const FormInputContainer = styled(View)<FormInputStyles>`
  margin: ${VERTICAL_SPACING.spacing15}px 0;
`

export const InputLabel = styled(Text)<FormInputStyles>`
  margin-bottom: ${VERTICAL_SPACING.spacing10}px;
  font-family: ${FONTS.bold};
`

export const ErrorMessage = styled(Text)<FormInputStyles>`
  color: ${COLORS.error};
  font-family: ${FONTS.light};
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
`
