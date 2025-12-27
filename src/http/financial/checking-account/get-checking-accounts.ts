import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetCheckingAccountsRequest {
  page?: string
  limit?: string
  type?: 'EXCLUSIVE_REDECT_USE' | 'EVENTS' | 'COLLOQUIUM'
  orderBy?: string
}

export const getCheckingAccountsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  checkingAccounts: z.array(
    z.object({
      id: z.string(),
      type: z.enum(['EXCLUSIVE_REDECT_USE', 'EVENTS', 'COLLOQUIUM']),
      balance: z.number(),
      balanceInCents: z.number(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    }),
  ),
})

export async function getCheckingAccounts(params: IGetCheckingAccountsRequest) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get('checking-account', {
      searchParams,
    })
    .json()

  return getCheckingAccountsSchema.parse(data)
}
