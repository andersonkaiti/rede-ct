import { api } from '@adapters/index'
import { BASE_URL } from '@config/index'
import type { ITeamMember } from 'types/team'

interface IComiteLegitimador {
  id: string
  name: string
  description: string
  created_at: string
  updated_at: string
  team_members: ITeamMember[]
}

export async function getLegitimatingCommittee() {
  return await api.get<IComiteLegitimador[]>(
    `${BASE_URL}/team/type/comite-legitimador`
  )
}
