import { api } from '@http/api-client'

interface ICreateRedeCTHighlightRequest {
  type: 'PERSON' | 'INSTITUTION'
  description?: string
  honorableMention?: boolean
  honoredAt: Date
  meritUrl?: string
  userId: string
}

export async function createRedeCTHighlight(
  data: ICreateRedeCTHighlightRequest,
) {
  await api.post('redect-highlight', {
    json: data,
  })
}
