import React from 'react'
import { HORIZONTAL_SPACING } from '../../../../constants'
import { CustomFab, FabIcon } from './styles'

interface AddFabProps {
  onAddFab?: () => void
  isFab: boolean
}

export const AddFab = ({ onAddFab, isFab }: AddFabProps) => (
  <CustomFab
    renderInPortal={isFab}
    position="absolute"
    onPress={onAddFab}
    bottom={HORIZONTAL_SPACING.spacing75}
    icon={<FabIcon />}
  />
)
