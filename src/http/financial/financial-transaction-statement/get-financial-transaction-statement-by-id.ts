import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

const getFinancialTransactionStatementByIdSchema = z.object({
  id: z.string(),
  documentUrl: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export async function getFinancialTransactionStatementById(id: string) {
  try {
    const data = await api.get(`financial-transaction-statement/${id}`).json()

    return getFinancialTransactionStatementByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
