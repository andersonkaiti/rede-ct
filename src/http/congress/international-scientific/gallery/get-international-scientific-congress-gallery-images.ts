import { api } from '@http/api-client'
import z from 'zod'

const getInternationalScientificCongressGalleryImagesResponseSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  galleryImages: z.array(
    z.object({
      id: z.string(),
      imageUrl: z.string(),
      caption: z.string().nullable().optional(),
      congressId: z.string(),
    }),
  ),
})

export async function getInternationalScientificCongressGalleryImages(
  id: string,
  page: number = 1,
  limit: number = 9,
) {
  const data = await api
    .get(`international-scientific-congress/${id}/gallery`, {
      searchParams: { page: String(page), limit: String(limit) },
    })
    .json()

  return getInternationalScientificCongressGalleryImagesResponseSchema.parse(
    data,
  )
}
