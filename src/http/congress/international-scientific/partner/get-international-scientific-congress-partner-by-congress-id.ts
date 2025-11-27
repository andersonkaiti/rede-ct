import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface GetInternationalScientificCongressPartnerByCongressIdParams {
  id: string
  page?: number
  limit?: number
}

export const getInternationalScientificCongressPartnersByCongressIdSchema =
  z.object({
    page: z.number(),
    totalPages: z.number(),
    offset: z.number(),
    limit: z.number(),
    partners: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        logoUrl: z.string(),
        congressId: z.string(),
      }),
    ),
  })

export async function getInternationalScientificCongressPartnerByCongressId({
  id,
  ...params
}: GetInternationalScientificCongressPartnerByCongressIdParams) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get(`international-scientific-congress/${id}/partner`, {
      searchParams,
    })
    .json()

  return getInternationalScientificCongressPartnersByCongressIdSchema.parse(
    data,
  )
}
