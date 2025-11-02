import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IPendenciesRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
  userId?: string
}

export const getRegisteredPendenciesSchema = z.object({
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
      user: z.object({
        id: z.string(),
        name: z.string(),
        avatarUrl: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        emailAddress: z.string(),
        orcid: z.string(),
        phone: z.string(),
        lattesUrl: z.string(),
        role: z.literal('ADMIN'),
      }),
    })
  ),
})

export async function getRegisteredPendencies(params: IPendenciesRequest) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get('pendency', {
      searchParams,
    })
    .json()

  return getRegisteredPendenciesSchema.parse(data)
}
