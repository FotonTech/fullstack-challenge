import React from 'react'
import { COLORS } from '../../../../constants'
import { WelcomeContainer, WelcomeTexts } from './styles'

interface WelcomeTextProps {
  username: string
}

export const WelcomeText = ({ username }: WelcomeTextProps) => (
  <WelcomeContainer>
    <WelcomeTexts>Hi, </WelcomeTexts>
    <WelcomeTexts color={COLORS.secondaryPink}>
      {username}
      {'  '}👋
    </WelcomeTexts>
  </WelcomeContainer>
)
