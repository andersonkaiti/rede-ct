import { api } from '@http/api-client'

export interface InMemoriamResponse {
  id: string
  birthDate: string | null
  deathDate: string | null
  name: string
  role: 'RESEARCHER' | 'LEADER'
  biography: string
  photoUrl?: string | null
  createdAt: Date
  updatedAt: Date
}

export async function getInMemoriamById(
  id: string
): Promise<InMemoriamResponse> {
  return await api.get(`in-memoriam/${id}`).json()
}
