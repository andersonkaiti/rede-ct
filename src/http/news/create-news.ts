import { api } from '@http/api-client'

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

  news.append('title', data.title)
  news.append('content', data.content)
  news.append('image', data.image)

  return await api
    .post('news', {
      body: news,
    })
    .json()
}
