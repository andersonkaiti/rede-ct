import { deleteRedeCTHighlightById } from '@http/redect-highlights/delete-redect-highlight-by-id'
import { getRedeCTHighlights } from '@http/redect-highlights/get-redect-highlights'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useRedeCTHighlights() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['redect-highlights', page, limit, filter, orderBy]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () =>
      getRedeCTHighlights({
        filter,
        orderBy,
        page,
        limit,
      }),
  })

  async function handleRemoveRedeCTHighlight(id: string) {
    await deleteRedeCTHighlightById(id)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Destaque removido com sucesso!')
  }

  return {
    handleRemoveRedeCTHighlight,
    ...result,
  }
}
