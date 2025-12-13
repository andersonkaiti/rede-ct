import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

export interface IGetPartnersRequest {
  page?: string
  limit?: string
  orderBy?: 'asc' | 'desc'
  filter?: string
  category?: string
  search?: string
  isActive?: boolean
}

export const getPartnersSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  partners: z.array(
    z.object({
      name: z.string(),
      id: z.string(),
      logoUrl: z.string().nullable(),
      websiteUrl: z.string().nullable(),
      description: z.string().nullable(),
      category: z.string().nullable(),
      since: z.string(),
      isActive: z.boolean(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  ),
})

export async function getPartners({ filter, ...params }: IGetPartnersRequest) {
  const searchParams = parseSearchParams({
    params,
    name: filter,
    description: filter,
    category: filter,
  })

  const data = await api
    .get('partner', {
      searchParams,
    })
    .json()

  return getPartnersSchema.parse(data)
}
