import { api } from '@http/api-client'

export async function deleteScientificJournalById(id: string) {
  await api.delete(`scientific-journals/${id}`)
}
