import { api } from '@http/api-client'

export async function deleteInternationalScientificCongressGalleryImage(
  id: string,
) {
  await api.delete(`international-scientific-congress/gallery/${id}`)
}
