import styled from '../../styled-components'

export const Container = styled.div`
  flex: 1 0 25%;

  margin: ${({ theme: { spacing } }) => spacing(4)}px;
  padding: ${({ theme: { spacing } }) => spacing(2)}px;

  box-shadow: -9px -9px 16px rgba(255, 255, 255, 0.75), 9px 9px 16px rgba(166, 180, 200, 0.75),
    -1px -1px 1px rgba(255, 255, 255, 0.75);
  border-radius: ${({ theme: { spacing } }) => spacing(2)}px;
`
