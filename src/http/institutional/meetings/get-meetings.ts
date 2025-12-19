import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

export type MeetingOrderBy = 'asc' | 'desc'

interface IGetMeetingsRequest {
  page?: string
  limit?: string
  title?: string
  format?: 'ONLINE' | 'IN_PERSON'
  status?: 'PENDING' | 'CANCELLED' | 'FINISHED'
  orderBy?: MeetingOrderBy
}

export const getMeetingsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
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

export async function getMeetings(params: IGetMeetingsRequest) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get('meeting', {
      searchParams,
    })
    .json()

  return getMeetingsSchema.parse(data)
}
