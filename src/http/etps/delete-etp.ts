import { api } from '@http/api-client'

export async function deleteEtp(id: string) {
  return await api.delete(`etp/${id}`)
}
