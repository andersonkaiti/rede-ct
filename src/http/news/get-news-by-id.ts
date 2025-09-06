'use server'

import { api } from '@http/api-client'
import type { INews } from 'types/news'

export async function getNewsById(id: string): Promise<INews> {
  return await api.get(`news/${id}`).json()
}
