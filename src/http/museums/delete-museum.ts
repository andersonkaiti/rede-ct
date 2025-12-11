import { api } from '@http/api-client'

export async function deleteMuseumById(id: string) {
  await api.delete(`museum/${id}`)
}
