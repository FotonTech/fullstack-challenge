import { Text, View } from 'native-base'
import styled from 'styled-components'
import {
  COLORS,
  FONTS,
  HORIZONTAL_SPACING,
  TYPOGRAPHY,
  VERTICAL_SPACING
} from '../../../../constants'
import Icon from 'react-native-vector-icons/Feather'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const ActionsContainer = styled(View)`
  position: absolute;
  background-color: ${COLORS.white};
  bottom: ${hp('18%')}px;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: ${VERTICAL_SPACING.spacing20}px ${HORIZONTAL_SPACING.spacing20}px;
  margin-left: ${HORIZONTAL_SPACING.spacing20}px;
  margin-right: ${HORIZONTAL_SPACING.spacing20}px;
  border-radius: 4px;
`

export const ActionIcon = styled(Icon)`
  font-size: ${TYPOGRAPHY.subtitleSize20}px;
  color: ${COLORS.lightGray};
`

export const ActionTitle = styled(Text)`
  margin-left: ${HORIZONTAL_SPACING.spacing20}px;
  font-size: ${TYPOGRAPHY.bodySize14}px;
  font-family: ${FONTS.bold};
`

export const VerticalDivider = styled(View)`
  border-right-width: 1px;
  border-right-color: ${COLORS.lightGray};
  width: ${HORIZONTAL_SPACING.spacing20}px;
  height: ${VERTICAL_SPACING.spacing20}px;
`
