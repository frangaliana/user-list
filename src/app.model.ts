import { Theme } from './app.theme'

export type Color = keyof Theme['palette']

export type SvgIconProps = {
  color: Color
  size: number
  title?: string
}

export type User = {
  name: string
  surname: string
  image: string
  description: string
  age: number
  connectedUsers: number
  id: string
}

export type Fields = 'name' | 'surname' | 'age' | 'connectedUsers'
