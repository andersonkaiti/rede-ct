import { api } from '@http/api-client'
import type { ITeam } from 'types/team'

export async function getTeam(id: string) {
  return await api.get<ITeam>(`team/id/${id}`).json()
}
