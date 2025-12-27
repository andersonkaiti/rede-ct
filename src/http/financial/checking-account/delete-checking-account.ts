import { api } from '@http/api-client'

export async function deleteCheckingAccount(id: string) {
  await api.delete(`checking-account/${id}`)
}
