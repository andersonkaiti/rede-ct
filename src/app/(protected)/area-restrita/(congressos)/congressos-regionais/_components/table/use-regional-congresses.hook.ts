import { deleteRegionalCongress } from '@http/congress/regional/delete-regional-congress'
import { getRegionalCongresses } from '@http/congress/regional/get-regional-congresses'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useRegionalCongresses() {
  const queryClient = useQueryClient()

  const [{ page, limit, filter, orderBy }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filter: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['regional-congresses', page, limit, filter, orderBy]

  const result = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getRegionalCongresses({
        page,
        limit,
        filter,
        orderBy,
      }),
  })

  async function handleRemoveRegionalCongress(id: string) {
    try {
      await deleteRegionalCongress(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Congresso regional removido com sucesso!')
    } catch {
      toast.error('Erro ao remover congresso regional.')
    }
  }

  return {
    handleRemoveRegionalCongress,
    ...result,
  }
}
