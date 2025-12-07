import { deleteInternationalScientificCongress } from '@http/congress/international-scientific/delete-international-scientific-congress'
import { getInternationalScientificCongresses } from '@http/congress/international-scientific/get-international-scientific-congresses'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useInternationalScientificCongresses() {
  const queryClient = useQueryClient()

  const [{ page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const QUERY_KEY = ['international-scientific-congresses', page, limit]

  const { isLoading, ...rest } = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getInternationalScientificCongresses({
        page,
        limit,
      }),
    staleTime: 0,
  })

  async function handleRemoveInternationalScientificCongress(id: string) {
    try {
      await deleteInternationalScientificCongress(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Congresso científico internacional removido com sucesso!')
    } catch {
      toast.error('Erro ao remover congresso científico internacional.')
    }
  }

  return {
    isLoading,
    handleRemoveInternationalScientificCongress,
    page,
    limit,
    ...rest,
  }
}
