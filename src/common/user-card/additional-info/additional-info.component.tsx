import * as React from 'react'

import { Fields } from '../../../app.model'
import { Container, AgeContainer } from './additional-info.styled'
import { FieldCard } from '../../field-card'

type AdditionalInformationProps = {
  readMode: boolean
  age: number
  connectedUsers: number
  handleChange: (field: Fields) => (value: string) => void
}

export const AdditionalInformation: React.FC<AdditionalInformationProps> = ({
  readMode,
  age,
  connectedUsers,
  handleChange,
}) => (
  <Container>
    <AgeContainer>
      <FieldCard readMode={readMode} title="Age" data={age ? age.toString() : ''} handleChange={handleChange('age')} />
    </AgeContainer>
    <FieldCard
      readMode={readMode}
      title="C. Users"
      data={connectedUsers ? connectedUsers.toString() : ''}
      handleChange={handleChange('connectedUsers')}
    />
  </Container>
)
