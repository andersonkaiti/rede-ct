import { api } from '@http/api-client'

interface IUpdateCheckingAccountRequest {
  id: string
  type?: 'EXCLUSIVE_REDECT_USE' | 'EVENTS' | 'COLLOQUIUM'
  balance?: number
}

export async function updateCheckingAccount({
  id,
  type,
  balance,
}: IUpdateCheckingAccountRequest) {
  await api.put(`checking-account/${id}`, {
    json: {
      type,
      balance,
    },
  })
}
