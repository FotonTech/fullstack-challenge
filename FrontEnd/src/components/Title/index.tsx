import React from 'react'
import { Row } from '..'
import { BackButtonIcon, CustomTitle, TitleStyles } from './styles'
import { VERTICAL_SPACING } from '../../constants'

interface TitleProps extends TitleStyles {
  title: string
  onBackPress?: () => void
}

export const Title = ({ title, onBackPress, marginBottom }: TitleProps) => (
  <Row marginBottom={VERTICAL_SPACING.spacing20}>
    <BackButtonIcon name="arrow-left" onPress={onBackPress} />
    <CustomTitle marginBottom={marginBottom}>{title}</CustomTitle>
  </Row>
)
