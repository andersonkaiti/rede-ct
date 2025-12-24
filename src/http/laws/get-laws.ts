import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetLawsRequest {
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

export const getLawsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
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
