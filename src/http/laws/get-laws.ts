import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetLawsRequest {
  filter?: string
  orderBy?: string
  page?: string
  limit?: string
}

export const getLawsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  laws: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      link: z.string(),
      country: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  ),
})

export async function getLaws({ filter, ...params }: IGetLawsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    country: filter,
  })

  const data = await api
    .get('law', {
      searchParams,
    })
    .json()

  return getLawsSchema.parse(data)
}
