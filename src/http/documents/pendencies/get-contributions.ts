import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IContributionsRequest {
  page?: string
  limit?: string
  filter?: string
  userId?: string
  orderBy?: string
}

const getAllContributionsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  pendencies: z.array(
    z.object({
      title: z.string(),
      description: z.string().nullable(),
      userId: z.string(),
      id: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      status: z.enum(['PENDING', 'PAID']),
      dueDate: z.string().nullable(),
      documentUrl: z.string(),
      user: z.object({
        name: z.string(),
        id: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        emailAddress: z.string(),
        avatarUrl: z.string().nullable(),
        orcid: z.string().nullable(),
        phone: z.string().nullable(),
        lattesUrl: z.string().nullable(),
        role: z.enum(['ADMIN', 'USER']),
      }),
    }),
  ),
})

export async function getContributions({
  filter,
  ...params
}: IContributionsRequest) {
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

  return getAllContributionsSchema.parse(data)
}
