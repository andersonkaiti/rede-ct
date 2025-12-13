import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetNewsRequest {
  filter?: string
  orderBy?: string
  authorId?: string
  page?: string
  limit?: string
}

export const getNewsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  news: z.array(
    z.object({
      id: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      title: z.string(),
      content: z.string(),
      imageUrl: z.string().nullable(),
      author: z.object({
        name: z.string(),
        id: z.string(),
        avatarUrl: z.string().nullable(),
        createdAt: z.string(),
        updatedAt: z.string(),
        emailAddress: z.string(),
        orcid: z.string().nullable(),
        phone: z.string().nullable(),
        lattesUrl: z.string().nullable(),
        role: z.enum(['ADMIN', 'USER']),
      }),
    }),
  ),
})

export async function getNews({ filter, ...params }: IGetNewsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    title: filter,
    content: filter,
  })

  const data = await api
    .get('news', {
      searchParams,
    })
    .json()

  return getNewsSchema.parse(data)
}
