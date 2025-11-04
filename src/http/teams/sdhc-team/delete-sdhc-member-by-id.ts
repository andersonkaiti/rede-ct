import { api } from '@http/api-client'

export async function deleteSDHCTeamMemberById(id: string) {
  await api.delete(`sdhc-team-member/${id}`)
}
