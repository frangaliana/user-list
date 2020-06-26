import styled from './styled-components'

export const ListLayout = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const NavigationBar = styled.div`
  flex: 0;
  position: sticky;
  top: 0;

  padding: ${({ theme: { spacing } }) => spacing(2)}px;

  display: flex;
  justify-content: center;
`

export const ListContainer = styled.div`
  flex: 1;
  padding: ${({ theme: { spacing } }) => spacing(2)}px;
`
