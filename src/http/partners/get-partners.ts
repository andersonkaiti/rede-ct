import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

export interface IGetPartnersRequest {
  page?: string
  limit?: string
  orderBy?: string
  filter?: string
  onlyActive?: boolean
}

export const getPartnersSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  partners: z.array(
    z.object({
      name: z.string(),
      id: z.string(),
      logoUrl: z.string().nullable(),
      websiteUrl: z.string().nullable(),
      description: z.string().nullable(),
      category: z.string().nullable(),
      since: z.coerce.date(),
      isActive: z.boolean(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    }),
  ),
})

export async function getPartners({
  filter,
  onlyActive = false,
  ...params
}: IGetPartnersRequest) {
  const searchParams = parseSearchParams({
    params,
    name: filter,
    description: filter,
    category: filter,
    isActive: onlyActive ? true : undefined,
  })

  const data = await api
    .get('partner', {
      searchParams,
    })
    .json()

  return getPartnersSchema.parse(data)
}
