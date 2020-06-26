import { User } from '../../app.model'
import { DropdownItem } from '../../common'

export const getUuidv4 = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

export const createOrderDropdown = (): DropdownItem[] => [
  {
    code: 'name',
    description: 'Name',
  },
  {
    code: 'surname',
    description: 'Surname',
  },
  {
    code: 'age',
    description: 'Age',
  },
  {
    code: 'connectedUsers',
    description: 'Connected Users',
  },
]

const compareFields = <T extends any>(a: T, b: T): number => {
  switch (typeof a) {
    case 'string':
      return a.localeCompare(b)
    default:
      return a <= b ? -1 : 1
  }
}

export const usersSortByField = (field: keyof User, sortingAsc: boolean) => (a: User, b: User) =>
  (sortingAsc ? 1 : -1) * compareFields(a[field], b[field])
