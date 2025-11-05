import { api } from '@http/api-client'

interface IUpdateSDHCTeamMemberRequest {
  id: string
  role: string
  description?: string | null
  userId: string
}

export async function updateSDHCTeamMember({
  id,
  ...data
}: IUpdateSDHCTeamMemberRequest) {
  return await api
    .put(`sdhc-team-member/${id}`, {
      json: data,
    })
    .json()
}
