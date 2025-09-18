import { api } from '@http/api-client'
import { getAuthenticatedUser } from '@http/auth/get-user'
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

  const user = await getAuthenticatedUser()

  news.append('title', title)
  news.append('content', content)
  news.append('image', image)

  if (user.id) {
    news.append('author_id', user.id)
  }

  return await api
    .put(`news/${id}`, {
      body: news,
    })
    .json()
}
