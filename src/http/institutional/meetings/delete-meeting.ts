import { api } from '@http/api-client'

export async function deleteMeeting(id: string) {
  await api.delete(`meeting/${id}`)
}
