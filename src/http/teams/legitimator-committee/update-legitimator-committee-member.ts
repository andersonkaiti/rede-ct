import { api } from '@http/api-client'

interface IUpdateLegitimatorCommitteeMemberRequest {
  id: string
  role: string
  description?: string
  userId: string
}

export async function updateLegitimatorCommitteeMember({
  id,
  ...data
}: IUpdateLegitimatorCommitteeMemberRequest) {
  await api
    .put(`legitimator-committee-member/${id}`, {
      json: data,
    })
    .json()
}
