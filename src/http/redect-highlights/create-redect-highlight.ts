import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface ICreateRedeCTHighlightRequest {
  type: 'PERSON' | 'INSTITUTION'
  name: string
  description?: string
  honorableMention?: boolean
  honoredAt: Date
  meritUrl?: string
  image?: File
}

export async function createRedeCTHighlight(
  data: ICreateRedeCTHighlightRequest,
) {
  const formData = parseFormData(data)

  await api.post('redect-highlight', {
    body: formData,
  })
}
