import { api } from '@http/api-client'

export interface IUpdateEtpRequest {
  id: string
  code?: string
  title?: string
  description?: string
  notes?: string
  userId?: string
  leaderId?: string
  deputyLeaderId?: string
  secretaryId?: string
  memberIds?: string[]
}

export async function updateETP({ id, ...data }: IUpdateEtpRequest) {
  await api.put(`etp/${id}`, {
    json: data,
  })
}
