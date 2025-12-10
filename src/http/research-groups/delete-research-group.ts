import { api } from '@http/api-client'

export async function deleteResearchGroupById(id: string) {
  await api.delete(`research-groups/${id}`)
}
