import { api } from '@http/api-client'

export async function deleteRedeCTHighlightById(id: string) {
  await api.delete(`redect-highlight/${id}`)
}
