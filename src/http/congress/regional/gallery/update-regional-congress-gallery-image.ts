import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface IUpdateRegionalCongressGalleryImageRequest {
  image?: File
  caption?: string
}

export async function updateRegionalCongressGalleryImage(
  id: string,
  data: IUpdateRegionalCongressGalleryImageRequest,
) {
  const formData = parseFormData(data)

  await api.put(`regional-congress/gallery/${id}`, {
    body: formData,
  })
}
