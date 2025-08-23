export interface IComiteLegitimador {
  id: string
  name: string
  description: string
  created_at: string
  updated_at: string
  team_members: ITeamMember[]
}
