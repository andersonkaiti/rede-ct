'use server'

import { api } from '@adapters/index'
import type { INews } from 'types/news'

export async function getNewsById(id: string) {
  return await api.get<INews>(`/news/${id}`)
}
