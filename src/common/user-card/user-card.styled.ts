import styled from '../../styled-components'

type ContainerProps = {
  readMode: boolean
}

export const Container = styled.div<ContainerProps>`
  flex: 1 0 25%;

  margin: ${({ theme: { spacing } }) => spacing(4)}px;
  padding: ${({ theme: { spacing } }) => spacing(2)}px;

  background-color: ${({ theme: { palette } }) => palette.background};

  box-shadow: -9px -9px 16px rgba(255, 255, 255, 0.75), 9px 9px 16px rgba(166, 180, 200, 0.75),
    -1px -1px 1px rgba(255, 255, 255, 0.75);
  border-radius: ${({ theme: { spacing } }) => spacing(2)}px;

  ${({ readMode }) =>
    readMode &&
    `
    &:hover {
      cursor: pointer;
      box-shadow: inset 5px 5px 10px #a6b4c8, inset -5px -5px 15px #ffffff;
    }
  `}
`

export const ActionsContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing(2)}px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`
