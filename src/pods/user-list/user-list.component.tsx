import * as React from 'react'

import { User, Fields } from '../../app.model'
import { DropdownMenu, UserCard, SkeletonLoader, Button, CardModal } from '../../common'

import { getUsers } from './user-list.api'
import { useLoadMore } from './user-list.hook'
import { FilterContainer, Container, LoadMore } from './user-list.styled'
import { createOrderDropdown, usersSortByField, getUuidv4 } from './user-list.business'

type UserListProps = {}

const initialUser: User = {
  name: '',
  surname: '',
  age: null,
  connectedUsers: null,
  description: null,
  image: null,
  id: getUuidv4(),
}

export const UserList: React.FC<UserListProps> = () => {
  const [users, setUsers] = React.useState<User[]>([])
  const [loading, setLoading] = React.useState(true)

  const { page, elementRef } = useLoadMore()

  const dropdownItems = createOrderDropdown()
  const [sorted, setSorted] = React.useState(false)
  const [sortField, setSortField] = React.useState<Fields>('name')
  const [sortedUsers, setSortedUsers] = React.useState<User[]>([])

  const [showModal, setShowModal] = React.useState(false)

  const sortList = (newSortField: string) => {
    if (newSortField !== sortField) {
      setSortField(newSortField as Fields)
      setSorted(!sorted)
      setSortedUsers([...sortedUsers].sort(usersSortByField(newSortField as Fields, true)))
    }
  }

  React.useEffect(() => {
    getUsers().then((result) => {
      setLoading(false)
      setUsers(result)
      setSortedUsers(result)
    })
  }, [])

  React.useEffect(() => {
    getUsers(page).then((newUsers) => {
      if (newUsers.length > 0 && page > 1) {
        setUsers((prevUsers) => [...prevUsers, ...newUsers])
        setSortedUsers((prevUsers) => [...prevUsers, ...newUsers])
      }
    })
  }, [page])

  const handleClick = () => {
    setNewUser(initialUser)
    setShowModal(true)
  }

  const dismiss = () => setShowModal(false)

  const [newUser, setNewUser] = React.useState<User>(initialUser)

  const handleSelect = (user: User) => {
    setNewUser(user)
    setShowModal(true)
  }

  const removeUser = (userId: string) => {
    setShowModal(false)
    setUsers((prevUsers) => prevUsers.filter((prevUser) => prevUser.id !== userId))
    setSortedUsers((prevSortedUsers) => prevSortedUsers.filter((prevSortedUser) => prevSortedUser.id !== userId))
  }

  const addUser = (newUser: User) => {
    setShowModal(false)

    setUsers((prevUsers) =>
      newUser.id
        ? [...prevUsers.filter((prevUser) => prevUser.id !== newUser.id), newUser].sort(
            usersSortByField(sortField as Fields, true)
          )
        : [...prevUsers, newUser].sort(usersSortByField(sortField as Fields, true))
    )

    setSortedUsers((prevSortedUsers) =>
      newUser.id
        ? [...prevSortedUsers.filter((prevSortedUser) => prevSortedUser.id !== newUser.id), newUser].sort(
            usersSortByField(sortField as Fields, true)
          )
        : [...prevSortedUsers, newUser].sort(usersSortByField(sortField as Fields, true))
    )
  }

  return (
    <>
      {
        <CardModal visible={showModal} dismiss={dismiss}>
          <UserCard user={newUser} readMode={false} handleSave={addUser} handleRemove={removeUser} />
        </CardModal>
      }
      <FilterContainer>
        <Button title="Add User" color="highlighted" handleClick={handleClick} />
        <DropdownMenu
          selectedItem={dropdownItems.find((dropdownItem) => dropdownItem.code === sortField)}
          items={Object.values(dropdownItems)}
          toggleItem={sortList}
        />
      </FilterContainer>
      <Container>
        {loading
          ? Array.from({ length: 14 }, (v, k) => k + 1).map((num: number) => <SkeletonLoader key={num} />)
          : !sorted
          ? users && users.map((user) => <UserCard key={user.id} user={user} handleSelect={handleSelect} />)
          : sortedUsers &&
            sortedUsers.map((sortedUser) => (
              <UserCard key={sortedUser.id} user={sortedUser} handleSelect={handleSelect} />
            ))}
      </Container>
      <LoadMore ref={elementRef} />
    </>
  )
}
