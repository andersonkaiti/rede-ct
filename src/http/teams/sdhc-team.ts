import { api } from '@adapters/index'
import type { ITeam } from 'types/team'

export async function getSdhcTeam() {
  return await api.get<ITeam[]>('/team/type/equipe-sdhc')
}
