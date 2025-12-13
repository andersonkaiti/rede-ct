import { api } from '@http/api-client'

export async function deleteRegiment(id: string) {
  await api.delete(`regiment/${id}`)
}
