import { api } from '@http/api-client'

export async function deleteLawById(id: string) {
  await api.delete(`law/${id}`)
}
