import { api } from '../../core/api'
import { User } from '../../app.model'

export const getUsers = (page = 1): Promise<User[]> => api.get(`/users?_page=${page}&_limit=15`)
