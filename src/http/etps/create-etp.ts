import { api } from '@http/api-client'

export interface ICreateEtpRequest {
  code: string
  title: string
  description?: string
  notes?: string
  leaderId: string
  deputyLeaderId: string
  secretaryId: string
  memberIds: string[]
}

export async function createEtp(data: ICreateEtpRequest) {
  await api.post('etp', {
    json: data,
  })
}
