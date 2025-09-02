import { api } from '@adapters/index'
import type { INews } from 'types/news'

interface IGetNewsProps {
  filter: string
  orderBy: string
  authorId: string
}

export async function getNews({ filter, orderBy, authorId }: IGetNewsProps) {
  const searchParams = new URLSearchParams()

  searchParams.set('title', filter)
  searchParams.set('content', filter)
  searchParams.set('updated_at', filter)

  searchParams.set('order_by', orderBy)

  searchParams.set('author_id', authorId)

  return await api.get<INews[]>(`/news?${searchParams}`)
}
