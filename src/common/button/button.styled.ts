import styled from '../../styled-components'

import { Theme } from '../../app.theme'

type ButtonContainerProps = {
  themeColor: keyof Theme['palette']
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${({ theme: { palette } }) => palette.background};
  color: ${({ theme: { palette }, themeColor }) => palette[themeColor]};

  border-radius: ${({ theme: { spacing } }) => spacing(0.4)}px;
  border: 1px solid ${({ theme: { palette }, themeColor }) => palette[themeColor]};

  height: ${({ theme: { spacing } }) => spacing(5)}px;
  width: ${({ theme: { spacing } }) => spacing(18)}px;

  cursor: pointer;
`
