import React from 'react'
import { Row } from '../../../../components'
import { ActionIcon, ActionsContainer, ActionTitle, VerticalDivider } from './styles'

export const Actions = () => (
  <ActionsContainer>
    <Row>
      <ActionIcon name="book-open" />
      <ActionTitle>Read</ActionTitle>
      <VerticalDivider />
    </Row>

    <Row>
      <ActionIcon name="headphones" />
      <ActionTitle>Listen</ActionTitle>
      <VerticalDivider />
    </Row>

    <Row>
      <ActionIcon name="share" />
      <ActionTitle>Share</ActionTitle>
    </Row>
  </ActionsContainer>
)
