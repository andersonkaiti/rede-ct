import { api } from '@http/api-client'

export async function deleteTeamMemberById(id: string) {
  await api.delete(`team/member/${id}`)
}
