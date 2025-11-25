import { api } from '@http/api-client'
import z from 'zod'

export const getInternationalScientificCongressGalleryImageByIdSchema =
  z.object({
    id: z.string(),
    imageUrl: z.string(),
    caption: z.string().nullable().optional(),
    congressId: z.string(),
  })

export async function getInternationalScientificCongressGalleryImageById(
  id: string,
) {
  const data = await api
    .get(`international-scientific-congress/gallery/${id}`)
    .json()

  return getInternationalScientificCongressGalleryImageByIdSchema.parse(data)
}
