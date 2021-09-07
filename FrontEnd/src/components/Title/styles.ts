import { HORIZONTAL_SPACING } from './../../constants/spacing'
import { Text } from 'native-base'
import styled from 'styled-components'
import { COLORS, FONTS, TYPOGRAPHY } from '../../constants'
import Icon from 'react-native-vector-icons/Feather'

export interface TitleStyles {
  marginBottom?: string
}

export const CustomTitle = styled(Text)<TitleStyles>`
  font-size: ${TYPOGRAPHY.subtitleSize24}px;
  font-family: ${FONTS.bold};
  color: ${COLORS.secondaryPink};
  margin-left: ${HORIZONTAL_SPACING.spacing10}px;
`

export const BackButtonIcon = styled(Icon)`
font-size: ${TYPOGRAPHY.subtitleSize24}px;
color: ${COLORS.secondaryPink};
`
