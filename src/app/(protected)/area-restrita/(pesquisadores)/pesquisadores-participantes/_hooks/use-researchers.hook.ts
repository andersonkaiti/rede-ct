import { deleteResearcher } from '@http/researchers/delete-reseacher'
import { getResearchers } from '@http/researchers/get-researchers'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryState } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = '1'
const DEFAULT_LIMIT = '7'

export function useResearchers() {
  const queryClient = useQueryClient()

  const [page] = useQueryState('page', parseAsString.withDefault(DEFAULT_PAGE))
  const [limit] = useQueryState(
    'limit',
    parseAsString.withDefault(DEFAULT_LIMIT)
  )

  const QUERY_KEY = ['researchers', page, limit]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getResearchers({
        page,
        limit,
      }),
  })

  async function handleRemoveResearcher(id: string) {
    try {
      const response = await deleteResearcher(id)

      if (response.ok) {
        await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

        toast.success('Pesquisador removido com sucesso!')
      }
    } catch {
      toast.error('Erro ao remover pesquisador.')
    }
  }

  return {
    isLoading,
    handleRemoveResearcher,
    ...rest,
  }
}
