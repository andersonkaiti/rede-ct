import { api } from '@http/api-client'

interface IUpdateRedeCTHighlightRequest {
  id: string
  type?: 'PERSON' | 'INSTITUTION'
  description?: string
  honorableMention?: boolean
  honoredAt?: Date
  meritUrl?: string
  userId?: string
}

export async function updateRedeCTHighlight({
  id,
  ...data
}: IUpdateRedeCTHighlightRequest) {
  await api.put(`redect-highlight/${id}`, {
    json: data,
  })
}
