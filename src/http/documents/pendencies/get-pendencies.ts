import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IPendenciesRequest {
  page?: string
  limit?: string
  filter?: string
  userId?: string
  orderBy?: string
}

export const getRegisteredPendenciesSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  pendencies: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      status: z.literal('PENDING').or(z.literal('PAID')),
      dueDate: z.string(),
      documentUrl: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      userId: z.string(),
      user: z.object({
        id: z.string(),
        name: z.string(),
        avatarUrl: z.string().nullable(),
        createdAt: z.string(),
        updatedAt: z.string(),
        emailAddress: z.string(),
        orcid: z.string().nullable(),
        phone: z.string().nullable(),
        lattesUrl: z.string().nullable(),
        role: z.literal('ADMIN').or(z.literal('USER')),
      }),
    }),
  ),
})

export async function getRegisteredPendencies({
  filter,
  ...params
}: IPendenciesRequest) {
  const searchParams = parseSearchParams({
    ...params,
    title: filter,
    description: filter,
  })

  const data = await api
    .get('pendency', {
      searchParams,
    })
    .json()

  return getRegisteredPendenciesSchema.parse(data)
}
