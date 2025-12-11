import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IUpdateRedeCTHighlightRequest {
  id: string
  type?: 'PERSON' | 'INSTITUTION'
  name?: string
  description?: string
  honorableMention?: boolean
  honoredAt?: Date
  meritUrl?: string
  image?: File
}

export async function updateRedeCTHighlight({
  id,
  ...data
}: IUpdateRedeCTHighlightRequest) {
  const formData = parseFormData(data)

  await api.put(`redect-highlight/${id}`, {
    body: formData,
  })
}
