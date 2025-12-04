import { api } from '@http/api-client'

interface IUpdateBookVolumeRequest {
  id: string
  volumeNumber?: number
  year?: number
  title?: string
  author?: string
  accessUrl?: string
  description?: string
  authorImage?: File
  coverImage?: File
  catalogSheet?: File
}

export async function updateBookVolume({
  id,
  volumeNumber,
  year,
  title,
  author,
  accessUrl,
  description,
  authorImage,
  coverImage,
  catalogSheet,
}: IUpdateBookVolumeRequest) {
  const formData = new FormData()

  if (volumeNumber !== undefined) {
    formData.append('volumeNumber', volumeNumber.toString())
  }

  if (year !== undefined) {
    formData.append('year', year.toString())
  }

  if (title) {
    formData.append('title', title)
  }

  if (author) {
    formData.append('author', author)
  }

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

  await api.put(`book-volumes/${id}`, {
    body: formData,
  })
}
