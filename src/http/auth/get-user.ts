import { api } from '@http/api-client'

interface IAuthenticatedUserResponse {
  name: string
  id: string
  passwordHash: string
  avatarUrl: string | null
  createdAt: Date
  updatedAt: Date
  emailAddress: string
  role: 'ADMIN' | 'USER'
}

export async function getAuthenticatedUser(): Promise<IAuthenticatedUserResponse> {
  return await api.get('auth/user').json()
}
