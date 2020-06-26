import styled from '../styled-components'

export const Title = styled.h1`
  margin: 0;

  font-weight: 900;
  font-size: ${({ theme: { spacing } }) => spacing(8)}px;
  letter-spacing: ${({ theme: { spacing } }) => spacing(-0.05)}px;
`

export const Heading = styled.h1`
  margin: 0;

  font-weight: 900;
  font-size: ${({ theme: { spacing } }) => spacing(4)}px;
`

export const Subheading = styled.h2`
  margin: 0;

  font-weight: 700;
  font-size: ${({ theme: { spacing } }) => spacing(3)}px;
`

export const Link = styled.p`
  margin: 0;

  font-weight: 700;
  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
  letter-spacing: ${({ theme: { spacing } }) => spacing(-0.05)}px;
`

export const Text = styled.p`
  margin: 0;

  font-weight: 500;
  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
`
