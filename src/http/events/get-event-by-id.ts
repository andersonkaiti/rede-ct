import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import z from 'zod'

interface IGetEventByIdRequest {
  id: string
}

const getEventByIdSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string().nullable(),
    imageUrl: z.string().nullable(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    location: z.string().nullable(),
    status: z.enum(['PENDING', 'CANCELLED', 'FINISHED']),
    format: z.enum(['ONLINE', 'IN_PERSON']),
    eventLink: z.string().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
  .nullable()

export async function getEventById({ id }: IGetEventByIdRequest) {
  try {
    const data = await api.get(`event/${id}`).json()

    return getEventByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      return null
    }

    throw error
  }
}
