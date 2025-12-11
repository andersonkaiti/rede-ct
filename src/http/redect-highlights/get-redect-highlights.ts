import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetRedeCTHighlightsRequest {
  filter?: string
  orderBy?: string
  page?: string
  limit?: string
}

const getRedeCTHighlightsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  highlights: z.array(
    z.object({
      id: z.string(),
      type: z.enum(['PERSON', 'INSTITUTION']),
      name: z.string(),
      description: z.string().nullable(),
      honorableMention: z.string().nullable(),
      imageUrl: z.string().nullable(),
      honoredAt: z.string(),
      meritUrl: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  ),
})

export async function getRedeCTHighlights({
  filter,
  ...params
}: IGetRedeCTHighlightsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    name: filter,
    description: filter,
    honorableMention: filter,
  })

  const data = await api
    .get('redect-highlight', {
      searchParams,
    })
    .json()

  return getRedeCTHighlightsSchema.parse(data)
}
