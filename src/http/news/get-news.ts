import { api } from '@adapters/index'
import { BASE_URL } from '@config/index'
import type { INews } from 'types/news'

export async function getNews() {
  return await api.get<INews[]>(`${BASE_URL}/news`)
}
