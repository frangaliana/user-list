import styled from '../../../styled-components'

export const Container = styled.div`
  display: flex;
`

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InformationContainer = styled.div`
  padding-left: ${({ theme: { spacing } }) => spacing(1.5)}px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`
export const ConnectedContainer = styled.div`
  padding: 100px;
`
