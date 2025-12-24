import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetRegionalCongressesRequest {
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

export const getRegionalCongressesSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  congresses: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      edition: z.number(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date(),
      description: z.string().nullable(),
      location: z.string().nullable(),
      congressLink: z.string().nullable(),
      noticeUrl: z.string().nullable(),
      scheduleUrl: z.string().nullable(),
      programUrl: z.string().nullable(),
      adminReportUrl: z.string().nullable(),
      proceedingsUrl: z.string().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
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
