import { deleteFinancialTransactionStatement } from '@http/financial/financial-transaction-statement/delete-financial-transaction-statement'
import { getFinancialTransactionStatements } from '@http/financial/financial-transaction-statement/get-financial-transaction-statements'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useStatements() {
  const queryClient = useQueryClient()

  const [{ orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['financial-transaction-statements', page, limit, orderBy]

  const result = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getFinancialTransactionStatements({
        page,
        limit,
        orderBy,
      }),
  })

  async function handleRemoveStatement(id: string) {
    try {
      await deleteFinancialTransactionStatement(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Extrato removido com sucesso!')
    } catch {
      toast.error('Erro ao remover extrato.')
    }
  }

  return {
    handleRemoveStatement,
    ...result,
  }
}
