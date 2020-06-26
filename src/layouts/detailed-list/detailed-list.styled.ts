import styled from '../../styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  flex: 0;

  position: fixed;
  width: 100vw;
  top: 0;

  background-color: ${({ theme: { palette } }) => palette.background};
  border-bottom: ${({ theme: { spacing } }) => `${spacing(0.125)}px solid rgba(0,0,0,0.2)`};

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: -7px -7px 20px rgba(255, 255, 255, 0.8), 7px 7px 20px rgba(211, 219, 230, 0.7),
    -1px -1px 1px rgba(255, 255, 255, 0.6);
`

export const List = styled.div`
  flex: 1;
  margin: ${({ theme: { spacing } }) => `${spacing(11)}px ${spacing(4)}px`};
`
