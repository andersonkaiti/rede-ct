import { api } from '@http/api-client'

export async function deleteRegionalCongressGalleryImage(id: string) {
  await api.delete(`regional-congress/gallery/${id}`)
}
