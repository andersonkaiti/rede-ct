import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IUpdateNewsRequest {
  id: string
  title: string
  content: string
  image: File
}

export async function updateNews({ id, ...data }: IUpdateNewsRequest) {
  const formData = parseFormData(data)

  await api
    .put(`news/${id}`, {
      body: formData,
    })
    .json()
}
