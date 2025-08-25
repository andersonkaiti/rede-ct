import { api } from '@adapters/index'
import type { IUser } from 'types/user'

export async function getUsers() {
  return await api.get<IUser[]>('/user')
}
