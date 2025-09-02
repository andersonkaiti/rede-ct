import { api } from '@adapters/index'
import type { INews } from 'types/news'

interface IGetUserNewsProps {
  userId: string
  filter: string
  orderBy: string
}

export async function getUserNews({
  filter,
  orderBy,
  userId,
}: IGetUserNewsProps) {
  const searchParams = new URLSearchParams()

  searchParams.set('title', filter)
  searchParams.set('order_by', orderBy)

  return await api.get<INews[]>(`/news/author/${userId}?${searchParams}`)
}
