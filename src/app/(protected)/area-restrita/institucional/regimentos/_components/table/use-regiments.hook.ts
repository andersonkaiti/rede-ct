import { deleteRegiment } from '@http/institutional/regiments/delete-regiment'
import { getRegiments } from '@http/institutional/regiments/get-regiments'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useRegiments() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['regiments', page, limit, orderBy, filter]

  const result = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getRegiments({
        page,
        limit,
        filter,
        orderBy,
      }),
  })

  async function handleRemoveRegiment(id: string) {
    try {
      await deleteRegiment(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Regimento removido com sucesso!')
    } catch {
      toast.error('Erro ao remover regimento.')
    }
  }

  return {
    handleRemoveRegiment,
    ...result,
  }
}
