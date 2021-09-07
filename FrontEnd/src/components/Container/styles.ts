import { HORIZONTAL_SPACING, VERTICAL_SPACING } from '../../constants'
import { COLORS } from '../../constants'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

export const CustomContainer = styled(LinearGradient).attrs({
  colors: [COLORS.white, COLORS.primaryBeige, COLORS.primaryBeige]
})`
  background-color: ${COLORS.primaryBeige};
  width: ${HORIZONTAL_SPACING.fullWidth}px;
  height: ${VERTICAL_SPACING.fullHeight}px;
  padding: ${VERTICAL_SPACING.spacing50}px ${HORIZONTAL_SPACING.spacing20}px 0 ${HORIZONTAL_SPACING.spacing20}px;
`
