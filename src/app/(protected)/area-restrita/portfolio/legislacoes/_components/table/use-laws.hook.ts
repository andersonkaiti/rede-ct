import { deleteLawById } from '@http/laws/delete-law-by-id'
import { getLaws } from '@http/laws/get-laws'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = ''
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useLaws() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsString.withDefault(DEFAULT_ORDER_BY),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const QUERY_KEY = ['laws', filter, orderBy, page, limit]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getLaws({
        filter,
        orderBy,
        page,
        limit,
      }),
  })

  async function handleRemoveLaw(lawId: string) {
    if (!lawId) {
      throw new Error('O id da lei é obrigatório!')
    }

    await deleteLawById(lawId)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Lei removida com sucesso!')
  }

  return {
    isLoading,
    handleRemoveLaw,
    page,
    limit,
    ...rest,
  }
}
