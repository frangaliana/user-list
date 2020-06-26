import * as React from 'react'

import { Container, Header, List } from './detailed-list.styled'

type DetailedListLayoutProps = {
  HeaderContent: React.ReactNode
  ListContent: React.ReactNode
}

export const DetailedListLayout: React.FC<DetailedListLayoutProps> = ({ HeaderContent, ListContent }) => (
  <Container>
    <Header>{HeaderContent}</Header>
    <List>{ListContent}</List>
  </Container>
)
