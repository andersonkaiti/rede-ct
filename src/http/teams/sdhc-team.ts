import { api } from '@http/api-client'
import type { ITeam } from 'types/team'

export async function getSdhcTeam(): Promise<ITeam[]> {
  return await api.get('team/type/equipe-sdhc').json()
}
