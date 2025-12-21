import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface ICreateBookVolumeRequest {
  volumeNumber: number
  year: number
  title: string
  authorId: string
  accessUrl?: string
  catalogSheetUrl?: string
  description?: string
  coverImage?: File
}

export async function createBookVolume(data: ICreateBookVolumeRequest) {
  const formData = parseFormData(data)

  await api.post('book-volumes', {
    body: formData,
  })
}
