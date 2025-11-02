import { api } from '@http/api-client'

export async function deleteNewsById(id: string) {
  await api.delete(`news/${id}`)
}
