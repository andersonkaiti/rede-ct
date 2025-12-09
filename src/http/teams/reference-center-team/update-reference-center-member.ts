import { api } from '@http/api-client'

interface IUpdateReferenceCenterTeamMemberRequest {
  id: string
  role?: string
  description?: string
  userId?: string
}

export async function updateReferenceCenterTeamMember({
  id,
  ...data
}: IUpdateReferenceCenterTeamMemberRequest) {
  await api.put(`reference-center-team-member/${id}`, {
    json: data,
  })
}
