import { api } from '@http/api-client'

export interface InMemoriamResponse {
  id: string
  birthDate: Date
  deathDate: Date
  name: string
  role: 'RESEARCHER' | 'LEADER'
  biography: string
  photoUrl?: string | null
  createdAt: Date
  updatedAt: Date
}

export async function getInMemoriamByRole(
  role: string
): Promise<InMemoriamResponse[]> {
  return await api.get(`in-memoriam/role/${role}`).json()
}
