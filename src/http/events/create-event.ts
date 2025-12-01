import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface ICreateEventRequest {
  title: string
  description?: string
  startDate: Date
  endDate: Date
  location?: string
  format: 'ONLINE' | 'IN_PERSON'
  eventLink?: string
  status?: 'PENDING' | 'CANCELLED' | 'FINISHED'
  image: File
}

export async function createEvent(data: ICreateEventRequest) {
  const formData = parseFormData(data)

  await api.post('event', {
    body: formData,
  })
}
