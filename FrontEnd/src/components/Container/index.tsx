import React, { ReactChild } from 'react'
import { CustomContainer } from './styles'

type ContainerProps = {
  children: ReactChild | ReactChild[] | Element
}

export const Container = ({ children }: ContainerProps) => (
  <CustomContainer>{children}</CustomContainer>
)
