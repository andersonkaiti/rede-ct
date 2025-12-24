import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetRedeCTHighlightsRequest {
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

const getRedeCTHighlightsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  highlights: z.array(
    z.object({
      id: z.string(),
      type: z.enum(['PERSON', 'INSTITUTION']),
      description: z.string().nullable(),
      honorableMention: z.boolean().nullable(),
      honoredAt: z.coerce.date(),
      meritUrl: z.string().nullable(),
      userId: z.string(),
      user: z.object({
        name: z.string(),
        orcid: z.string().nullable(),
        phone: z.string().nullable(),
        lattesUrl: z.string().nullable(),
        id: z.string(),
        avatarUrl: z.string().nullable(),
        createdAt: z.string(),
        updatedAt: z.string(),
        emailAddress: z.string(),
        role: z.enum(['ADMIN', 'USER']),
      }),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    }),
  ),
})

export async function getRedeCTHighlights({
  filter,
  ...params
}: IGetRedeCTHighlightsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    type: filter,
    description: filter,
  })

  const data = await api
    .get('redect-highlight', {
      searchParams,
    })
    .json()

  return getRedeCTHighlightsSchema.parse(data)
}
