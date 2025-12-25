import { deleteInMemoriam } from '@http/in-memorian/delete-in-memoriam'
import { getInMemoriam } from '@http/in-memorian/get-in-memoriam'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useInMemoriam() {
  const queryClient = useQueryClient()

  const [{ page, limit, filtro: filter, orderBy }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['in-memorian', page, limit, filter, orderBy]

  const result = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getInMemoriam({
        page,
        limit,
        filter,
        orderBy,
      }),
  })

  async function handleRemoveInMemorian(id: string) {
    try {
      await deleteInMemoriam(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Registro In Memoriam removido com sucesso!')
    } catch {
      toast.error('Erro ao remover registro In Memoriam.')
    }
  }

  return {
    handleRemoveInMemorian,
    ...result,
  }
}
