import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IUpdateEventRequest {
  id: string
  title?: string
  description?: string
  startDate?: Date
  endDate?: Date
  location?: string
  format?: 'ONLINE' | 'IN_PERSON'
  eventLink?: string
  status?: 'PENDING' | 'CANCELLED' | 'FINISHED'
  image?: File
}

export async function updateEvent({ id, ...data }: IUpdateEventRequest) {
  const formData = parseFormData(data)

  await api.put(`event/${id}`, {
    body: formData,
  })
}
