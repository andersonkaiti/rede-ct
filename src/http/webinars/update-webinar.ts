import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IUpdateWebinarRequest {
  id: string
  title?: string
  description?: string
  scheduledAt?: Date
  webinarLink?: string
  thumbnail?: File
  guestIds?: string[]
}

export async function updateWebinar({ id, ...data }: IUpdateWebinarRequest) {
  const formData = parseFormData(data)

  await api.put(`webinars/${id}`, {
    body: formData,
  })
}
