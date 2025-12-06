import { api } from '@http/api-client'

interface IUpdateScientificArticleRequest {
  id: string
  title?: string
  author?: string
  journal?: string
  volume?: string
  edition?: string
  pageStart?: number
  pageEnd?: number
  startDate?: Date
  endDate?: Date
  city?: string
  state?: string
  country?: string
  publisher?: string
  description?: string
  year?: number
  accessUrl?: string
}

export async function updateScientificArticle({
  id,
  ...data
}: IUpdateScientificArticleRequest) {
  await api.put(`scientific-articles/${id}`, {
    json: data,
  })
}
