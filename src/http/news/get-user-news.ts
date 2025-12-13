import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetUserNewsRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
}

export const getUserNewsSchema = z.object({
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
    }),
  ),
})

export async function getUserNews(params: IGetUserNewsRequest) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get('auth/user/news', {
      searchParams,
    })
    .json()

  return getUserNewsSchema.parse(data)
}
