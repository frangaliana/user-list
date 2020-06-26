import * as React from 'react'

import { ThemeStyledProvider } from './providers'
import { theme } from './app.theme'

import { DetailedListLayout } from './layouts'

import { Title } from './common'
import { UserList } from './pods/user-list'

export const App = () => {
  return (
    <ThemeStyledProvider theme={theme}>
      <DetailedListLayout HeaderContent={<Title>userlist</Title>} ListContent={<UserList />}></DetailedListLayout>
    </ThemeStyledProvider>
  )
}
