import * as React from 'react'

import { Container, PhotoContainer, InformationContainer } from './general-info.styled'
import { UserIcon } from '../../../assets/icons'
import { FieldCard } from '../../field-card'
import { Fields } from '../../../app.model'

type GeneralInformationProps = {
  readMode: boolean
  image: string
  name: string
  surname: string
  handleChange: (field: Fields) => (value: string) => void
}

export const GeneralInformation: React.FC<GeneralInformationProps> = ({
  readMode,
  image,
  name,
  surname,
  handleChange,
}) => (
  <Container>
    <PhotoContainer>{!image && <UserIcon color="text" size={8} />}</PhotoContainer>
    <InformationContainer>
      <FieldCard readMode={readMode} title="Name" data={name} handleChange={handleChange('name')} />
      <FieldCard readMode={readMode} title="Surname" data={surname} handleChange={handleChange('surname')} />
    </InformationContainer>
  </Container>
)
