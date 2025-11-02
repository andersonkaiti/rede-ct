import { deleteResearcher } from '@http/researchers/delete-reseacher'
import { getResearchers } from '@http/researchers/get-researchers'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useResearchers() {
  const queryClient = useQueryClient()

  const [{ page, limit, filtro: filter }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(''),
  })

  const QUERY_KEY = ['researchers', page, limit]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getResearchers({
        page,
        limit,
        filter,
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
    isLoading,
    handleRemoveResearcher,
    page,
    limit,
    ...rest,
  }
}
