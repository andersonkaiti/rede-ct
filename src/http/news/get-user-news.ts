import { api } from '@adapters/index'
import type { IPaginatedNews } from 'types/news'

interface IGetUserNewsProps {
  userId: string
  filter: string
  orderBy: string
  page: string
  limit: string
}

export async function getUserNews({
  filter,
  orderBy,
  userId,
  page,
  limit,
}: IGetUserNewsProps) {
  const searchParams = new URLSearchParams()

  searchParams.set('title', filter)
  searchParams.set('order_by', orderBy)
  searchParams.set('page', page)
  searchParams.set('limit', limit)

  return await api.get<IPaginatedNews>(`/news/author/${userId}?${searchParams}`)
}
