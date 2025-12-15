import { api } from '@http/api-client'

export async function demoteUser(id: string) {
  await api.put(`user/demote/${id}`)
}
