import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface GetRegionalCongressGalleryImagesParams {
  id: string
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

export const getRegionalCongressGalleryImagesSchema = z.object({
  page: z.number(),
  limit: z.number().optional(),
  total: z.number(),
  totalPages: z.number(),
  galleryImages: z.array(
    z.object({
      id: z.string(),
      imageUrl: z.string(),
      caption: z.string().nullable(),
      congressId: z.string(),
    }),
  ),
})

export async function getRegionalCongressGalleryImages({
  id,
  filter,
  ...params
}: GetRegionalCongressGalleryImagesParams) {
  const searchParams = parseSearchParams({
    ...params,
    caption: filter,
  })

  const data = await api
    .get(`regional-congress/${id}/gallery`, {
      searchParams,
    })
    .json()

  return getRegionalCongressGalleryImagesSchema.parse(data)
}
