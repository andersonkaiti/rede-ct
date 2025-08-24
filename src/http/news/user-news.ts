import { api } from '@adapters/index'
import type { QueryFunctionContext } from '@tanstack/react-query'
import type { INews } from 'types/news'

export async function getUserNews({
  queryKey: [, userId],
}: QueryFunctionContext) {
  return await api.get<INews[]>(`/news/author/${userId}`)
}
