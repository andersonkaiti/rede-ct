import { api } from '@http/api-client'
import type { ICertification } from 'types/certification'

export async function getCertification(id: string): Promise<ICertification> {
  return await api.get(`certification/${id}`).json()
}
