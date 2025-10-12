import { api } from '@http/api-client'
import type { INews } from 'types/news'

interface IUpdateNewsRequest {
  id: string
  title: string
  content: string
  image: File
}

export async function updateNews({
  id,
  title,
  content,
  image,
}: IUpdateNewsRequest): Promise<INews> {
  const news = new FormData()

  news.append('title', title)
  news.append('content', content)
  news.append('image', image)

  return await api
    .put(`news/${id}`, {
      body: news,
    })
    .json()
}
