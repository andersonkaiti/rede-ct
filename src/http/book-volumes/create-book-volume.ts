import { api } from '@http/api-client'

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

export async function createBookVolume({
  volumeNumber,
  year,
  title,
  author,
  accessUrl,
  description,
  authorImage,
  coverImage,
  catalogSheet,
}: ICreateBookVolumeRequest) {
  const formData = new FormData()

  formData.append('volumeNumber', volumeNumber.toString())
  formData.append('year', year.toString())
  formData.append('title', title)
  formData.append('author', author)

  if (accessUrl) {
    formData.append('accessUrl', accessUrl)
  }

  if (description) {
    formData.append('description', description)
  }

  if (authorImage) {
    formData.append('authorImage', authorImage)
  }

  if (coverImage) {
    formData.append('coverImage', coverImage)
  }

  if (catalogSheet) {
    formData.append('catalogSheet', catalogSheet)
  }

  await api.post('book-volumes', {
    body: formData,
  })
}
