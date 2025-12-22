import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

export const getRegionalCongressGalleryImageByIdSchema = z.object({
  id: z.string(),
  imageUrl: z.string(),
  caption: z.string().nullable(),
  congressId: z.string(),
})

export async function getRegionalCongressGalleryImageById(id: string) {
  try {
    const data = await api.get(`regional-congress/gallery/${id}`).json()

    return getRegionalCongressGalleryImageByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
