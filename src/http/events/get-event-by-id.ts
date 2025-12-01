import { api } from '@http/api-client'
import z from 'zod'

interface IGetEventByIdRequest {
  id: string
}

const getEventByIdSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  imageUrl: z.string().nullable(),
  startDate: z.string(),
  endDate: z.string(),
  location: z.string().nullable(),
  status: z.enum(['PENDING', 'CANCELLED', 'FINISHED']),
  format: z.enum(['ONLINE', 'IN_PERSON']),
  eventLink: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export async function getEventById({ id }: IGetEventByIdRequest) {
  const data = await api.get(`event/${id}`).json()

  return getEventByIdSchema.parse(data)
}
