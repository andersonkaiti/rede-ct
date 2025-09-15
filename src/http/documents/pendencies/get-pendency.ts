import { api } from '@http/api-client'
import type { IPendency } from 'types/pendency'

export async function getPendency(id: string): Promise<IPendency> {
  return await api.get(`pendency/${id}`).json()
}
