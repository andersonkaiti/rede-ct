import { api } from '@adapters/index'

export async function deleteTeamMemberById(id: string) {
  await api.delete(`/team/member/${id}`)
}
