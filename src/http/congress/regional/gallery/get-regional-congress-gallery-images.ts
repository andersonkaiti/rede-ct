import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface GetRegionalCongressGalleryImagesParams {
  id: string
  page?: number
  limit?: number
}

export const getRegionalCongressGalleryImagesSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      imageUrl: z.string(),
      caption: z.string().nullable(),
      congressId: z.string(),
    }),
  ),
  pagination: z.object({
    page: z.number(),
    limit: z.number(),
    total: z.number(),
    totalPages: z.number(),
  }),
})

export async function getRegionalCongressGalleryImages({
  id,
  ...params
}: GetRegionalCongressGalleryImagesParams) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get(`regional-congress/${id}/gallery`, {
      searchParams,
    })
    .json()

  return getRegionalCongressGalleryImagesSchema.parse(data)
}
