import { api } from '@http/api-client'
import type { IPaginatedNews } from 'types/news'

interface IGetUserNewsProps {
  filter: string
  orderBy: string
  page: string
  limit: string
}

export async function getUserNews({
  filter,
  orderBy,
  page,
  limit,
}: IGetUserNewsProps): Promise<IPaginatedNews> {
  const searchParams = new URLSearchParams()

  searchParams.set('title', filter)
  searchParams.set('orderBy', orderBy)
  searchParams.set('page', page)
  searchParams.set('limit', limit)

  return await api.get(`auth/user/news?${searchParams}`).json()
}
