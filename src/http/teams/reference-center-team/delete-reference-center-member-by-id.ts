import { api } from '@http/api-client'

export async function deleteReferenceCenterTeamMemberById(id: string) {
  await api.delete(`reference-center-team-member/${id}`)
}
