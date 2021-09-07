import React from 'react'
import { useController } from 'react-hook-form'
import { Input } from '../'
import { VERTICAL_SPACING } from '../../constants'
import { ErrorMessage, FormInputContainer, InputLabel } from './styles'

interface FormInputProps {
  control: any
  name: string
  type?: string
}

export const FormInput = ({ name, control, type }: FormInputProps) => {
  const {
    field: { value, onChange },
    formState: { errors }
  } = useController({
    name,
    control,
    defaultValue: '',
    rules: { required: true }
  })

  const hasError = errors && errors[name] && VERTICAL_SPACING.spacing10

  return (
    <FormInputContainer>
      <InputLabel>{name}</InputLabel>
      <Input value={value} onChangeText={onChange} type={type} />
      {hasError && <ErrorMessage marginTop={hasError}>Required field</ErrorMessage>}
    </FormInputContainer>
  )
}
