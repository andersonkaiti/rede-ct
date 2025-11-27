import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetInternationalScientificCongressesRequest {
  filter?: string
  page?: string
  limit?: string
  orderBy?: 'asc' | 'desc'
}

export const getInternationalScientificCongressesSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  congresses: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      edition: z.number(),
      startDate: z.string(),
      endDate: z.string(),
      description: z.string().nullable(),
      location: z.string().nullable(),
      congressLink: z.string().nullable(),
      noticeUrl: z.string().nullable(),
      scheduleUrl: z.string().nullable(),
      programUrl: z.string().nullable(),
      adminReportUrl: z.string().nullable(),
      proceedingsUrl: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
      partners: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          logoUrl: z.string(),
          congressId: z.string(),
        }),
      ),
      galleries: z.array(
        z.object({
          id: z.string(),
          imageUrl: z.string(),
          caption: z.string().nullable(),
          congressId: z.string(),
        }),
      ),
    }),
  ),
})

export async function getInternationalScientificCongresses({
  filter,
  ...params
}: IGetInternationalScientificCongressesRequest) {
  const searchParams = parseSearchParams({
    params,
    title: filter,
    edition: Number(filter) > 0 ? Number(filter) : undefined,
    location: filter,
    startDate: filter,
    endDate: filter,
  })

  const data = await api
    .get('international-scientific-congress', {
      searchParams,
    })
    .json()

  return getInternationalScientificCongressesSchema.parse(data)
}
