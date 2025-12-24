import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetRegimentsRequest {
  page?: string
  limit?: string
  filter?: string
  status?: string
  orderBy?: string
}

export const getRegimentsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  regiments: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      version: z.string(),
      publishedAt: z.coerce.date(),
      documentUrl: z.string(),
      status: z.enum(['DRAFT', 'IN_FORCE', 'REVOKED']),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    }),
  ),
})

export async function getRegiments({
  filter,
  ...params
}: IGetRegimentsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    title: filter,
  })

  const data = await api
    .get('regiment', {
      searchParams,
    })
    .json()

  return getRegimentsSchema.parse(data)
}
