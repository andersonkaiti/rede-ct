import { api } from '@http/api-client'

export async function deletePartner(id: string) {
  return await api.delete(`partner/${id}`)
}
