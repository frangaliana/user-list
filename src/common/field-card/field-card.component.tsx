import * as React from 'react'

import { Link } from '../text-types.styled'
import { Container, FieldName, DataInput } from './field-card.styled'

type FieldCardProps = {
  readMode: boolean
  title: string
  data: string
  handleChange: (newData: string) => void
}

export const FieldCard: React.FC<FieldCardProps> = ({ readMode, title, data, handleChange }) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)

  return (
    <Container>
      <FieldName>
        <Link>{`${title}:`}</Link>
      </FieldName>
      <DataInput readMode={readMode} value={data} disabled={readMode} onChange={onChange}></DataInput>
    </Container>
  )
}
