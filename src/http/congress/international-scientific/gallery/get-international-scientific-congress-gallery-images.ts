import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface GetInternationalScientificCongressGalleryImagesParams {
  id: string
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

const getInternationalScientificCongressGalleryImagesResponseSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  galleryImages: z.array(
    z.object({
      id: z.string(),
      imageUrl: z.string(),
      caption: z.string().nullable().optional(),
      congressId: z.string(),
    }),
  ),
})

export async function getInternationalScientificCongressGalleryImages({
  id,
  filter,
  ...params
}: GetInternationalScientificCongressGalleryImagesParams) {
  const searchParams = parseSearchParams({
    ...params,
    caption: filter,
  })

  const data = await api
    .get(`international-scientific-congress/${id}/gallery`, {
      searchParams,
    })
    .json()

  return getInternationalScientificCongressGalleryImagesResponseSchema.parse(
    data,
  )
}
