import { api } from '@http/api-client'
import type { INews } from 'types/news'

export async function deleteNewsById(id: string) {
  await api.delete<INews>(`news/${id}`)
}
