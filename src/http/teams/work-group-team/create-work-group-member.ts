import { api } from '@http/api-client'

interface ICreateWorkGroupTeamMemberRequest {
  role: string
  description?: string
  userId: string
}

export async function createWorkGroupTeamMember(
  data: ICreateWorkGroupTeamMemberRequest,
) {
  await api.post('work-group-team-member', {
    json: data,
  })
}
