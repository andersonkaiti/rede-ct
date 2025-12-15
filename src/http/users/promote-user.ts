import { api } from '@http/api-client'

export async function promoteUser(id: string) {
  await api.put(`user/promote/${id}`)
}
