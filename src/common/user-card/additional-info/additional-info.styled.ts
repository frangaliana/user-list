import styled from '../../../styled-components'

export const Container = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing(1.5)}px;
  display: flex;
`

export const AgeContainer = styled.div`
  border-right: 2px solid #a6b4c8;
  padding-right: 16px;
  margin-right: 8px;
`
