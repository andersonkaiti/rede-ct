import { api } from '@http/api-client'
import type { ITeam } from 'types/team'

export async function getLegitimatingCommittee(): Promise<ITeam[]> {
  return await api.get('team/type/comite-legitimador').json()
}
