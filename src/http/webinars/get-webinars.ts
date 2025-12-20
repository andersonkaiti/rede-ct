import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetWebinarsRequest {
  filter?: string
  orderBy?: string
  page?: string
  limit?: string
}

const getWebinarsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  webinars: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string().nullable(),
      scheduledAt: z.coerce.date(),
      webinarLink: z.string().nullable(),
      thumbnailUrl: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      guests: z
        .array(
          z.object({
            id: z.string(),
            name: z.string(),
            emailAddress: z.email(),
            avatarUrl: z.string().nullable(),
            createdAt: z.coerce.date(),
            updatedAt: z.coerce.date(),
            orcid: z.string().nullable(),
            phone: z.string().nullable(),
            lattesUrl: z.string().nullable(),
            role: z.enum(['USER', 'ADMIN']),
          }),
        )
        .optional(),
    }),
  ),
})

export async function getWebinars({ filter, ...params }: IGetWebinarsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    title: filter,
    description: filter,
  })

  const data = await api
    .get('webinars', {
      searchParams,
    })
    .json()

  return getWebinarsSchema.parse(data)
}
