import { api } from '@http/api-client'
import type { IUser } from 'types/user'

export async function getUsers(): Promise<IUser[]> {
  return await api.get('user').json()
}
