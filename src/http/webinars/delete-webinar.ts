import { api } from '@http/api-client'

export async function deleteWebinarById(id: string) {
  await api.delete(`webinars/${id}`)
}
