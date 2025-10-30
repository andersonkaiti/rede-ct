import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface ICreateNewsRequest {
  title: string
  content: string
  image: File
}

export async function createNews(data: ICreateNewsRequest) {
  const news = parseFormData(data)

  await api.post('news', {
    body: news,
  })
}
