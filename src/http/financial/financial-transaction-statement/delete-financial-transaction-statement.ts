import { api } from '@http/api-client'

export async function deleteFinancialTransactionStatement(id: string) {
  await api.delete(`financial-transaction-statement/${id}`)
}
