import { api } from '@http/api-client'
import z from 'zod'

export const getRegionalCongressGalleryImageByIdSchema = z.object({
  id: z.string(),
  imageUrl: z.string(),
  caption: z.string().nullable(),
  congressId: z.string(),
})

export async function getRegionalCongressGalleryImageById(id: string) {
  const data = await api.get(`regional-congress/gallery/${id}`).json()

  return getRegionalCongressGalleryImageByIdSchema.parse(data)
}
