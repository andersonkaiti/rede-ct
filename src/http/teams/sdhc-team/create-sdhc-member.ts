import { api } from '@http/api-client'

interface ICreateSDHCTeamMemberRequest {
  role: string
  description?: string
  userId: string
}

export async function createSdhcTeamMember(data: ICreateSDHCTeamMemberRequest) {
  await api.post('sdhc-team-member', {
    json: data,
  })
}
