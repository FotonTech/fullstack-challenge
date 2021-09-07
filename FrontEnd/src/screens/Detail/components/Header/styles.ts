import { Image, View } from 'native-base'
import styled from 'styled-components'
import { COLORS, HORIZONTAL_SPACING, TYPOGRAPHY } from '../../../../constants'
import Icon from 'react-native-vector-icons/Feather'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface HeaderProps {
  alignSelf?: string
  marginRight?: string
  marginLeft?: string
  transform?: any
  width?: string
  height?: string
}

export const HeaderContainer = styled(View)`
  background-color: ${COLORS.primaryBeige};
  width: ${HORIZONTAL_SPACING.fullWidth}px;
  height: ${hp('31%')}px;
  border-bottom-right-radius: 120px;
  position: absolute;
`

export const HeaderImage = styled(Image)<HeaderProps>`
  align-self: ${({ alignSelf }) => alignSelf ?? 'auto'};
  margin-right: ${({ marginRight }) => marginRight ?? 0}px;
  margin-left: ${({ marginLeft }) => marginLeft ?? 0}px;
  transform: ${({ transform }) => transform};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

export const HeaderBackIcon = styled(Icon)`
  font-size: ${TYPOGRAPHY.subtitleSize24}px;
  margin-top: ${hp('-5.75%')}px;
  margin-left: ${HORIZONTAL_SPACING.spacing20}px;
`
