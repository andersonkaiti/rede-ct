import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
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
  try {
    const data = await api
      .get(`international-scientific-congress/gallery/${id}`)
      .json()

    return getInternationalScientificCongressGalleryImageByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
