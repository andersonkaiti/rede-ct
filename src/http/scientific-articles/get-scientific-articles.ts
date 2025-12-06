import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetScientificArticlesRequest {
  filter?: string
  orderBy?: string
  page?: string
  limit?: string
}

const getScientificArticlesSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  scientificArticles: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      author: z.string(),
      journal: z.string().nullable(),
      volume: z.string().nullable(),
      edition: z.string().nullable(),
      pageStart: z.number().nullable(),
      pageEnd: z.number().nullable(),
      startDate: z.string(),
      endDate: z.string(),
      city: z.string().nullable(),
      state: z.string().nullable(),
      country: z.string().nullable(),
      publisher: z.string().nullable(),
      description: z.string().nullable(),
      year: z.number().nullable(),
      accessUrl: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  ),
})

export async function getScientificArticles({
  filter,
  ...params
}: IGetScientificArticlesRequest) {
  const searchParams = parseSearchParams({
    ...params,
    title: filter,
    author: filter,
    journal: filter,
  })

  const data = await api
    .get('scientific-articles', {
      searchParams,
    })
    .json()

  return getScientificArticlesSchema.parse(data)
}
