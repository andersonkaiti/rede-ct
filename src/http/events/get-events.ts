import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetEventsRequest {
  filter?: string
  status?: string
  format?: string
  orderBy?: string
  page?: string
  limit?: string
}

const getEventsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  events: z.array(
    z.object({
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
    }),
  ),
})

export async function getEvents({ filter, ...params }: IGetEventsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    title: filter,
  })

  const data = await api
    .get('event', {
      searchParams,
    })
    .json()

  return getEventsSchema.parse(data)
}
