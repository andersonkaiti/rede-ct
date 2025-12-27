import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetFinancialTransactionStatementsRequest {
  page?: string
  limit?: string
  orderBy?: string
}

export const getFinancialTransactionStatementsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  financialTransactionStatements: z.array(
    z.object({
      id: z.string(),
      documentUrl: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    }),
  ),
})

export async function getFinancialTransactionStatements(
  params: IGetFinancialTransactionStatementsRequest,
) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get('financial-transaction-statement', {
      searchParams,
    })
    .json()

  return getFinancialTransactionStatementsSchema.parse(data)
}
