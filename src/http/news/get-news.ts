import { api } from '@adapters/index'
import type { INews } from 'types/news'

export async function getNews() {
  return await api.get<INews[]>('/news')
}
