import { api } from '@http/api-client'
import type { IPaginatedNews } from 'types/news'

interface IGetNewsProps {
  filter: string
  orderBy: string
  authorId: string
  page: string
  limit: string
}

export async function getNews({
  filter,
  orderBy,
  authorId,
  page,
  limit,
}: IGetNewsProps): Promise<IPaginatedNews> {
  const searchParams = new URLSearchParams()

  searchParams.set('title', filter)
  searchParams.set('content', filter)
  searchParams.set('updatedAt', filter)

  searchParams.set('orderBy', orderBy)

  searchParams.set('authorId', authorId)

  searchParams.set('page', page)
  searchParams.set('limit', limit)

  return await api.get(`news?${searchParams}`).json()
}
