import * as React from 'react'

import { Theme } from '../../app.theme'
import { Link } from '../text-types.styled'
import { ButtonContainer } from './button.styled'

type ButtonProps = {
  color: keyof Theme['palette']
  title: string
  handleClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ color, title, handleClick }) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick()

  return (
    <ButtonContainer onClick={onClick} themeColor={color}>
      <Link>{title}</Link>
    </ButtonContainer>
  )
}
