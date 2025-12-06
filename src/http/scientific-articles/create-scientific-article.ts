import { api } from '@http/api-client'

interface ICreateScientificArticleRequest {
  title: string
  author: string
  journal?: string
  volume?: string
  edition?: string
  pageStart?: number
  pageEnd?: number
  startDate: Date
  endDate: Date
  city?: string
  state?: string
  country?: string
  publisher?: string
  description?: string
  year?: number
  accessUrl?: string
}

export async function createScientificArticle(
  data: ICreateScientificArticleRequest,
) {
  await api.post('scientific-articles', {
    json: data,
  })
}
