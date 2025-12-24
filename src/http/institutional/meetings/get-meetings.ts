import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetMeetingsRequest {
  page?: string
  limit?: string
  filter?: string
  status?: string
  format?: string
  orderBy?: string
}

export const getMeetingsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  meetings: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      scheduledAt: z.coerce.date(),
      format: z.literal('ONLINE'),
      agenda: z.string(),
      meetingLink: z.string(),
      location: z.string().nullable(),
      status: z.enum(['CANCELLED', 'PENDING', 'FINISHED']),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      minutes: z
        .object({
          id: z.string(),
          title: z.string(),
          publishedAt: z.string(),
          documentUrl: z.string(),
          meetingId: z.string(),
          createdAt: z.coerce.date(),
          updatedAt: z.coerce.date(),
        })
        .nullable(),
    }),
  ),
})

export async function getMeetings({ filter, ...params }: IGetMeetingsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    title: filter,
  })

  const data = await api
    .get('meeting', {
      searchParams,
    })
    .json()

  return getMeetingsSchema.parse(data)
}
