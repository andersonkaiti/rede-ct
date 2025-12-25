import { deleteResearcher } from '@http/researchers/delete-reseacher'
import { getResearchers } from '@http/researchers/get-researchers'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useResearchers() {
  const queryClient = useQueryClient()

  const [{ page, limit, filtro: filter, orderBy }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['researchers', page, limit, filter, orderBy]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getResearchers({
        page,
        limit,
        filter,
        orderBy,
      }),
  })

  async function handleRemoveResearcher(id: string) {
    try {
      await deleteResearcher(id)

      await queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      })

      toast.success('Pesquisador removido com sucesso!')
    } catch {
      toast.error('Erro ao remover pesquisador.')
    }
  }

  return {
    handleRemoveResearcher,
    ...result,
  }
}
