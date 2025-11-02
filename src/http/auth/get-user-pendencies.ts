import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IPendenciesRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
}

export const getAuthenticatedUserPendenciesSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  pendencies: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      status: z.literal('PENDING'),
      dueDate: z.string(),
      documentUrl: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      userId: z.string(),
    })
  ),
})

export async function getAuthenticatedUserPendencies(
  params: IPendenciesRequest
) {
  const searchParams = parseSearchParams({
    ...params,
    status: 'PENDING',
  })

  const data = await api
    .get('auth/pendencies', {
      searchParams,
    })
    .json()

  return getAuthenticatedUserPendenciesSchema.parse(data)
}
