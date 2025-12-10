import { deleteResearchGroupById } from '@http/research-groups/delete-research-group'
import { getResearchGroups } from '@http/research-groups/get-research-groups'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = ''
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useResearchGroups() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsString.withDefault(DEFAULT_ORDER_BY),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const QUERY_KEY = ['research-groups', filter, orderBy, page, limit]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () =>
      getResearchGroups({
        filter,
        orderBy,
        page,
        limit,
      }),
    staleTime: 0,
  })

  async function handleRemoveResearchGroup(id: string) {
    await deleteResearchGroupById(id)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Grupo de pesquisa removido com sucesso!')
  }

  return {
    isLoading,
    handleRemoveResearchGroup,
    page,
    limit,
    ...rest,
  }
}
