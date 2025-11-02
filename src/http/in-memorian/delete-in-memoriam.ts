import { api } from '@http/api-client'

export async function deleteInMemoriam(id: string) {
  await api.delete(`in-memoriaM/${id}`)
}
