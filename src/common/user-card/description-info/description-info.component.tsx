import * as React from 'react'

import { Container, DescriptionField } from './description-info.styled'

type DescriptionInformationProps = {
  description: string
}

export const DescriptionInformation: React.FC<DescriptionInformationProps> = ({ description }) => (
  <Container>
    <DescriptionField>{`Description: `}</DescriptionField>
    {description}
  </Container>
)
