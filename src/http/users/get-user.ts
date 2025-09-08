import { api } from '@http/api-client'

interface IGetUserResponse {
  id: string
  name: string
  passwordHash: string
  avatarUrl: string | null
  createdAt: string
  updatedAt: string
  emailAddress: string
  orcid: string | null
  phone: string | null
  lattesUrl: string | null
  role: 'ADMIN' | 'USER'
}

export async function getUser(id: string): Promise<IGetUserResponse> {
  return await api.get(`user/${id}`).json()
}
