import { api } from '@http/api-client'

export async function deleteManagementTeamById(id: string) {
  await api.delete(`management-team/${id}`)
}
