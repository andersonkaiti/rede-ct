import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface GetRegionalCongressPartnerByCongressIdParams {
  id: string
  page?: number
  limit?: number
}

export const getRegionalCongressPartnersByCongressIdSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      logoUrl: z.string().nullable(),
      congressId: z.string(),
    }),
  ),
  pagination: z
    .object({
      page: z.number(),
      limit: z.number(),
      total: z.number(),
      totalPages: z.number(),
    })
    .optional(),
})

export async function getRegionalCongressPartnerByCongressId({
  id,
  ...params
}: GetRegionalCongressPartnerByCongressIdParams) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get(`regional-congress/${id}/partner`, {
      searchParams,
    })
    .json()

  return getRegionalCongressPartnersByCongressIdSchema.parse(data)
}
