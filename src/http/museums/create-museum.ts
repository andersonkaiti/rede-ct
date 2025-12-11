import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface ICreateMuseumRequest {
  name: string
  city?: string
  state?: string
  country?: string
  description?: string
  website?: string
  email?: string
  phone?: string
  address?: string
  functioning?: string
  logo?: File
}

export async function createMuseum(data: ICreateMuseumRequest) {
  const formData = parseFormData(data)

  await api.post('museum', {
    body: formData,
  })
}
