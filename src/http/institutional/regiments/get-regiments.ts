import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetRegimentsRequest {
  page?: string
  limit?: string
  filter?: string
  status?: 'DRAFT' | 'IN_FORCE' | 'REVOKED'
  orderBy?: 'asc' | 'desc'
}

export const getRegimentsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  regiments: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      version: z.string(),
      publishedAt: z.string(),
      documentUrl: z.string(),
      status: z.enum(['DRAFT', 'IN_FORCE', 'REVOKED']),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  ),
})

export async function getRegiments({
  filter,
  ...params
}: IGetRegimentsRequest) {
  const searchParams = parseSearchParams({
    params,
    title: filter,
    version: filter,
  })

  const data = await api
    .get('regiment', {
      searchParams,
    })
    .json()

  return getRegimentsSchema.parse(data)
}
