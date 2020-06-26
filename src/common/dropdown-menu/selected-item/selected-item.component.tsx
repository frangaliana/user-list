import * as React from 'react'

import { SelectedItemContainer, Arrow } from './selected-item.styled'
import { Link } from '../../text-types.styled'
import { DropdownItem } from '../dropdown-menu.model'

type SelectedItemProps = {
  selectedItem: DropdownItem
  expanded: boolean
  toggleExpanded: () => void
}

export const SelectedItem: React.FC<SelectedItemProps> = ({
  selectedItem: { description },
  expanded,
  toggleExpanded,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => toggleExpanded()

  return (
    <SelectedItemContainer onClick={handleClick}>
      <Link>{`Order by: ${description}`}</Link>
      <Arrow expanded={expanded} />
    </SelectedItemContainer>
  )
}
