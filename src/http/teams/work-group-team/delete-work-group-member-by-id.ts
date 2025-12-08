import { api } from '@http/api-client'

export async function deleteWorkGroupTeamMemberById(id: string) {
  await api.delete(`work-group-team-member/${id}`)
}
