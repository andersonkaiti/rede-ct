import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IPendenciesRequest {
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

export const getAuthenticatedUserPendenciesSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
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
    }),
  ),
})

export async function getAuthenticatedUserPendencies({
  filter,
  ...params
}: IPendenciesRequest) {
  const searchParams = parseSearchParams({
    ...params,
    status: filter,
  })

  const data = await api
    .get('auth/pendencies', {
      searchParams,
    })
    .json()

  return getAuthenticatedUserPendenciesSchema.parse(data)
}
