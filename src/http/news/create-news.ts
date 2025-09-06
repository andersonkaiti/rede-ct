import { api } from '@http/api-client'
import { getAuthenticatedUser } from '@http/auth/get-user'

interface ICreateNewsRequest {
  title: string
  content: string
  // biome-ignore lint/suspicious/noExplicitAny: file
  image: any
}

interface ICreateNewsResponse {
  title: string
  content: string
  id: string
  imageUrl: string | null
  createdAt: Date
  updatedAt: Date
  authorId: string
}

export async function createNews(
  data: ICreateNewsRequest
): Promise<ICreateNewsResponse> {
  const news = new FormData()

  const user = await getAuthenticatedUser()

  news.append('title', data.title)
  news.append('content', data.content)
  news.append('image', data.image)

  if (user.id) {
    news.append('author_id', user.id)
  }

  return await api
    .post('news', {
      body: news,
    })
    .json()
}
