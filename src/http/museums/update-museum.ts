import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IUpdateMuseumRequest {
  id: string
  name?: string
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

export async function updateMuseum({ id, ...data }: IUpdateMuseumRequest) {
  const formData = parseFormData(data)

  await api.put(`museum/${id}`, {
    body: formData,
  })
}
