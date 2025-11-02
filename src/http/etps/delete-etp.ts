import { api } from '@http/api-client'

export async function deleteEtp(id: string) {
  await api.delete(`etp/${id}`)
}
