import { api } from '@http/api-client'

interface ICreateLegitimatorCommitteeMemberRequest {
  role: string
  description?: string
  userId: string
}

export async function createLegitimatorCommitteeMember(
  data: ICreateLegitimatorCommitteeMemberRequest
) {
  await api.post('legitimator-committee-member', {
    json: data,
  })
}
