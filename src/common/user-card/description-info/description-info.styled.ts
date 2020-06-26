import styled from '../../../styled-components'

export const Container = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing(1)}px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const DescriptionField = styled.span`
  font-weight: bold;
`
