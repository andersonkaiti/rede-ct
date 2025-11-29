import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetRegionalCongressesRequest {
  filter?: string
  page?: string
  limit?: string
  orderBy?: 'asc' | 'desc'
}

export const getRegionalCongressesSchema = z.object({
  data: z.array(
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
      regionalCongressPartners: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          logoUrl: z.string().nullable(),
          congressId: z.string(),
        }),
      ),
      regionalCongressGalleryItems: z.array(
        z.object({
          id: z.string(),
          imageUrl: z.string(),
          caption: z.string().nullable(),
          congressId: z.string(),
        }),
      ),
    }),
  ),
  pagination: z.object({
    page: z.number(),
    limit: z.number(),
    total: z.number(),
    totalPages: z.number(),
  }),
})

export async function getRegionalCongresses({
  filter,
  ...params
}: IGetRegionalCongressesRequest) {
  const searchParams = parseSearchParams({
    params,
    title: filter,
    edition: Number(filter) > 0 ? Number(filter) : undefined,
    location: filter,
  })

  const data = await api
    .get('regional-congress', {
      searchParams,
    })
    .json()

  return getRegionalCongressesSchema.parse(data)
}
