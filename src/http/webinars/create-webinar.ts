import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface ICreateWebinarRequest {
  title: string
  description?: string
  scheduledAt: Date
  webinarLink: string
  thumbnail: File
  guestIds: string[]
}

export async function createWebinar(data: ICreateWebinarRequest) {
  const webinar = parseFormData(data)

  await api.post('webinars', {
    body: webinar,
  })
}
