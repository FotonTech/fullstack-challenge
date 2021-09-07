import React from 'react'
import { Input } from '../Input'
import { SearchContainer } from './styles'

interface SearchBar {
  placeholder: string
  onSubmitEditing: any
  value: string
  onChangeText: (e) => void
}

export const SearchBar = ({ placeholder, onSubmitEditing, value, onChangeText }: SearchBar) => (
  <>
    <SearchContainer>
      <Input
        placeholder={placeholder}
        leftIcon="search"
        onSubmitEditing={onSubmitEditing}
        value={value}
        onChangeText={onChangeText}
      />
    </SearchContainer>
  </>
)
