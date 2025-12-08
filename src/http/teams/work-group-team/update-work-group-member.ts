import { api } from '@http/api-client'

interface IUpdateWorkGroupTeamMemberRequest {
  id: string
  role?: string
  description?: string
  userId?: string
}

export async function updateWorkGroupTeamMember({
  id,
  ...data
}: IUpdateWorkGroupTeamMemberRequest) {
  await api.put(`work-group-team-member/${id}`, {
    json: data,
  })
}
