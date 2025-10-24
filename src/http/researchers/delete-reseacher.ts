import { api } from '@http/api-client'

export async function deleteResearcher(id: string) {
  return await api.delete(`researcher/${id}`)
}
