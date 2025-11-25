import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface IUpdateInternationalScientificCongressGalleryImageRequest {
  id: string
  image?: File
  caption?: string
  congressId?: string
}

export async function updateInternationalScientificCongressGalleryImage({
  id,
  ...data
}: IUpdateInternationalScientificCongressGalleryImageRequest) {
  const formData = parseFormData(data)

  await api.put(`international-scientific-congress/gallery/${id}`, {
    body: formData,
  })
}
