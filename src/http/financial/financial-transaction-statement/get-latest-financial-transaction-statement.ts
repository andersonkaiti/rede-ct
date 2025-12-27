import { api } from '@http/api-client'
import z from 'zod'

const getLatestFinancialTransactionStatementSchema = z
  .object({
    id: z.string(),
    documentUrl: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
  .nullable()

export async function getLatestFinancialTransactionStatement() {
  const data = await api.get('financial-transaction-statement/latest').json()

  return getLatestFinancialTransactionStatementSchema.parse(data)
}
