import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface GetRegionalCongressPartnerByCongressIdParams {
  id: string
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

export const getRegionalCongressPartnersByCongressIdSchema = z.object({
  page: z.number(),
  limit: z.number().optional(),
  total: z.number(),
  totalPages: z.number(),
  partners: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      logoUrl: z.string().nullable(),
      congressId: z.string(),
    }),
  ),
})

export async function getRegionalCongressPartnerByCongressId({
  id,
  filter,
  ...params
}: GetRegionalCongressPartnerByCongressIdParams) {
  const searchParams = parseSearchParams({
    ...params,
    name: filter,
  })

  const data = await api
    .get(`regional-congress/${id}/partner`, {
      searchParams,
    })
    .json()

  return getRegionalCongressPartnersByCongressIdSchema.parse(data)
}
