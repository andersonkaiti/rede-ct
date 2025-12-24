import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IContributionsRequest {
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

export const getAuthenticatedUserContributionsSchema = z.object({
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
        role: z.union([z.literal('ADMIN'), z.literal('USER')]),
      }),
    }),
  ),
})

export async function getAuthenticatedUserContributions({
  filter,
  ...params
}: IContributionsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    status: filter,
  })

  const data = await api
    .get('auth/pendencies', {
      searchParams,
    })
    .json()

  return getAuthenticatedUserContributionsSchema.parse(data)
}
