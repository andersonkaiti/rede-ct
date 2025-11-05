import { api } from '@http/api-client'

export async function deleteLegitimatorCommitteeMemberById(id: string) {
  await api.delete(`legitimator-committee-member/${id}`)
}
