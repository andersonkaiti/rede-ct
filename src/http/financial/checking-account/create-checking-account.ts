import { api } from '@http/api-client'

interface ICreateCheckingAccountRequest {
  type: 'EXCLUSIVE_REDECT_USE' | 'EVENTS' | 'COLLOQUIUM'
  balance: number
}

export async function createCheckingAccount({
  type,
  balance,
}: ICreateCheckingAccountRequest) {
  await api.post('checking-account', {
    json: {
      type,
      balance,
    },
  })
}
