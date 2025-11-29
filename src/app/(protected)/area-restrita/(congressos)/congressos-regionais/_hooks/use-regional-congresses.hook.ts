import { deleteRegionalCongress } from '@http/congress/regional/delete-regional-congress'
import { getRegionalCongresses } from '@http/congress/regional/get-regional-congresses'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useRegionalCongresses() {
  const queryClient = useQueryClient()

  const [{ page, limit, filter }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filter: parseAsString.withDefault(''),
  })

  const QUERY_KEY = ['regional-congresses', page, limit, filter]

  const { isLoading, ...rest } = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getRegionalCongresses({
        page,
        limit,
        filter,
      }),
    staleTime: 0,
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
    isLoading,
    handleRemoveRegionalCongress,
    page,
    limit,
    filter,
    ...rest,
  }
}
