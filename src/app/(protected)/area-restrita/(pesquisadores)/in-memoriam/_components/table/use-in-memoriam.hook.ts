import { deleteInMemoriam } from '@http/in-memorian/delete-in-memoriam'
import { getInMemoriam } from '@http/in-memorian/get-in-memoriam'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useInMemoriam() {
  const queryClient = useQueryClient()

  const [{ page, limit, filtro: filter, orderBy }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
  })

  const QUERY_KEY = ['in-memorian', page, limit, filter, orderBy]

  const { isLoading, ...rest } = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getInMemoriam({
        page,
        limit,
        filter,
        orderBy,
      }),
    staleTime: 0,
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
    isLoading,
    handleRemoveInMemorian,
    ...rest,
  }
}
