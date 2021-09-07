import React from 'react'
import { ButtonStyles, CustomButton } from './styles'

interface ButtonProps extends ButtonStyles {
  text: string
  onPress: any
}

export const Button = ({ text, onPress, marginTop }: ButtonProps) => (
  <CustomButton onPress={onPress} marginTop={marginTop}>
    {text}
  </CustomButton>
)
