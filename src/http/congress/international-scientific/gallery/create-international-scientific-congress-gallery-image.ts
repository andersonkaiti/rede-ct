import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface ICreateInternationalScientificCongressGalleryImageRequest {
  image: File
  caption?: string
  congressId: string
}

export async function createInternationalScientificCongressGalleryImage({
  congressId,
  ...data
}: ICreateInternationalScientificCongressGalleryImageRequest) {
  const formData = parseFormData(data)

  return await api.post(
    `international-scientific-congress/${congressId}/gallery`,
    {
      body: formData,
    },
  )
}
