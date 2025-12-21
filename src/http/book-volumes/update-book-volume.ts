import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IUpdateBookVolumeRequest {
  id: string
  volumeNumber?: number
  year?: number
  title?: string
  authorId?: string
  accessUrl?: string
  catalogSheetUrl?: string
  description?: string
  coverImage?: File
}

export async function updateBookVolume({
  id,
  ...bookVolume
}: IUpdateBookVolumeRequest) {
  const formData = parseFormData(bookVolume)

  await api.put(`book-volumes/${id}`, {
    body: formData,
  })
}
