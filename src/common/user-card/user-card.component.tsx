import * as React from 'react'

import { User, Fields } from '../../app.model'

import { Container, ActionsContainer } from './user-card.styled'
import { GeneralInformation } from './general-info'
import { AdditionalInformation } from './additional-info'
import { DescriptionInformation } from './description-info'
import { Button } from '../button'

type UserCardProps = {
  user: User
  readMode?: boolean
  handleSelect?: (user: User) => void
  handleSave?: (user: User) => void
  handleRemove?: (userId: string) => void
}

export const UserCard: React.FC<UserCardProps> = ({
  readMode = true,
  user,
  handleSelect,
  handleSave,
  handleRemove,
}) => {
  const [userInput, setUserInput] = React.useState<User>(null)

  React.useEffect(() => {
    setUserInput(user)
  }, [user])

  const handleEdit = (field: Fields) => (value: string) =>
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [field]: value,
    }))

  const onSave = () => handleSave(userInput)
  const onRemove = () => handleRemove(user.id)
  const onSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (readMode) handleSelect(user)
  }

  return (
    <>
      {userInput && (
        <Container readMode={readMode} onClick={onSelect}>
          <GeneralInformation
            readMode={readMode}
            image={userInput.image}
            name={userInput.name}
            surname={userInput.surname}
            handleChange={handleEdit}
          />
          <AdditionalInformation
            readMode={readMode}
            age={userInput.age}
            connectedUsers={userInput.connectedUsers}
            handleChange={handleEdit}
          />
          {readMode && <DescriptionInformation description={userInput.description} />}
          {!readMode && (
            <ActionsContainer>
              <Button color="success" title="Save" handleClick={onSave} />
              <Button color="error" title="Remove" handleClick={onRemove} />
            </ActionsContainer>
          )}
        </Container>
      )}
    </>
  )
}
