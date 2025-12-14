import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface ICreateBookVolumeRequest {
  volumeNumber: number
  year: number
  title: string
  author: string
  accessUrl?: string
  description?: string
  authorImage?: File
  coverImage?: File
  catalogSheet?: File
}

export async function createBookVolume(data: ICreateBookVolumeRequest) {
  const formData = parseFormData(data)

  await api.post('book-volumes', {
    body: formData,
  })
}
