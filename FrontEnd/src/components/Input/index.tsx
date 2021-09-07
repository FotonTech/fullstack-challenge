import React from 'react'
import { CustomInput, InputIcon, InputStyles } from './styles'

interface InputProps extends InputStyles {
  type?: string
  placeholder?: string
  leftIcon?: any
  value: string
  onChangeText?: (e) => void
  onSubmitEditing?: any
}

export const Input = ({
  placeholder,
  backgroundColor,
  leftIcon,
  type,
  value,
  onChangeText,
  onSubmitEditing
}: InputProps) => (
  <CustomInput
    type={type || 'text'}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    backgroundColor={backgroundColor}
    onSubmitEditing={onSubmitEditing}
    InputLeftElement={leftIcon && <InputIcon name={leftIcon} />}
  />
)
