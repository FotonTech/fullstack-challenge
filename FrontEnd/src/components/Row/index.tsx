import React, { ReactChild } from 'react'
import { CustomRow, RowStyles } from './styles'

interface RowProps extends RowStyles {
  children?: ReactChild | ReactChild[]
}

export const Row = ({ alignItems, marginBottom, children }: RowProps) => (
  <CustomRow alignItems={alignItems} marginBottom={marginBottom}>
    {children}
  </CustomRow>
)
