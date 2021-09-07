import { Fab } from 'native-base'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY } from '../../../../constants'
import Icon from 'react-native-vector-icons/Feather'

export const CustomFab = styled(Fab)`
  background-color: ${COLORS.secondaryPink};
`

export const FabIcon = styled(Icon).attrs({ name: 'plus' })`
  font-size: ${TYPOGRAPHY.subtitleSize24}px;
  color: ${COLORS.white};
`
