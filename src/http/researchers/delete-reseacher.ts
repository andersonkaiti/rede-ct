import { api } from '@http/api-client'

export async function deleteResearcher(id: string) {
  await api.delete(`researcher/${id}`)
}
