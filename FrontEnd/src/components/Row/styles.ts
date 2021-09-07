import { View } from 'native-base'
import styled from 'styled-components'

export interface RowStyles {
  alignItems?: string
  marginBottom?: string | number
}

export const CustomRow = styled(View)<RowStyles>`
  flex-direction: row;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
`
