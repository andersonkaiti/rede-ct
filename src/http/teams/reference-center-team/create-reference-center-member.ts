import { api } from '@http/api-client'

interface ICreateReferenceCenterTeamMemberRequest {
  role: string
  description?: string
  userId: string
}

export async function createReferenceCenterTeamMember(
  data: ICreateReferenceCenterTeamMemberRequest,
) {
  await api.post('reference-center-team-member', {
    json: data,
  })
}
