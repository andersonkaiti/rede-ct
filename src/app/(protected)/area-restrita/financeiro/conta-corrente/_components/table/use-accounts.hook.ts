import { deleteCheckingAccount } from '@http/financial/checking-account/delete-checking-account'
import { getCheckingAccounts } from '@http/financial/checking-account/get-checking-accounts'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useAccounts() {
  const queryClient = useQueryClient()

  const [{ type, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    type: parseAsStringEnum([
      'ALL',
      'EXCLUSIVE_REDECT_USE',
      'EVENTS',
      'COLLOQUIUM',
    ]).withDefault('ALL'),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['checking-accounts', page, limit, type, orderBy]

  const result = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getCheckingAccounts({
        page,
        limit,
        type: type === 'ALL' ? undefined : type,
        orderBy,
      }),
  })

  async function handleRemoveAccount(id: string) {
    try {
      await deleteCheckingAccount(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Conta corrente removida com sucesso!')
    } catch {
      toast.error('Erro ao remover conta corrente.')
    }
  }

  return {
    handleRemoveAccount,
    ...result,
  }
}
