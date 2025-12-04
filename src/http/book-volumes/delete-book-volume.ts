import { api } from '@http/api-client'

export async function deleteBookVolumeById(id: string) {
  await api.delete(`book-volumes/${id}`)
}
