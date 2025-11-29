import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface ICreateRegionalCongressGalleryImageRequest {
  image: File
  caption?: string
}

export async function createRegionalCongressGalleryImage(
  id: string,
  data: ICreateRegionalCongressGalleryImageRequest,
) {
  const formData = parseFormData(data)

  await api.post(`regional-congress/${id}/gallery`, {
    body: formData,
  })
}
