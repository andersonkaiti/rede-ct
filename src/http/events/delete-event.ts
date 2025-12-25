import { api } from '@http/api-client'

export async function deleteEvent(id: string) {
  await api.delete(`event/${id}`)
}
