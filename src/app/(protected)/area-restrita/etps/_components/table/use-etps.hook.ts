import { deleteEtp } from '@http/etps/delete-etp'
import { getEtps } from '@http/etps/get-etps'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_FILTER = ''
const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useEtps() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
  })

  const QUERY_KEY = ['etps', page, limit]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getEtps({
        page,
        limit,
        filter,
        orderBy,
      }),
  })

  async function handleRemoveEtp(id: string) {
    try {
      await deleteEtp(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('ETP removida com sucesso!')
    } catch {
      toast.error('Erro ao remover ETP.')
    }
  }

  return {
    isLoading,
    handleRemoveEtp,
    ...rest,
  }
}
