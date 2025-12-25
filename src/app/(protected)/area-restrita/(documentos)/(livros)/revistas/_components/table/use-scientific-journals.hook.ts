import { deleteScientificJournalById } from '@http/scientific-journals/delete-scientific-journal'
import { getScientificJournals } from '@http/scientific-journals/get-scientific-journals'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useScientificJournals() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['scientific-journals', page, limit, filter, orderBy]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () =>
      getScientificJournals({
        filter,
        orderBy,
        page,
        limit,
      }),
    staleTime: 0,
  })

  async function handleRemoveJournal(id: string) {
    await deleteScientificJournalById(id)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Revista removida com sucesso!')
  }

  return {
    handleRemoveJournal,
    ...result,
  }
}
