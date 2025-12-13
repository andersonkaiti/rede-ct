import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IContributionsRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
  userId?: string
}

const getAllContributionsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
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

export async function getContributions(params: IContributionsRequest) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get('pendency', {
      searchParams,
    })
    .json()

  return getAllContributionsSchema.parse(data)
}
