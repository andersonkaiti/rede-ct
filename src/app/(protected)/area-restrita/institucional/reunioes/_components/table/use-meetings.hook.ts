import { deleteMeeting } from '@http/institutional/meetings/delete-meeting'
import { getMeetings } from '@http/institutional/meetings/get-meetings'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useMeetings() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['meetings', page, limit, filter, orderBy]

  const result = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getMeetings({
        page,
        limit,
        filter,
        orderBy,
      }),
  })

  async function handleRemoveMeeting(id: string) {
    try {
      await deleteMeeting(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Reunião removida com sucesso!')
    } catch {
      toast.error('Erro ao remover reunião.')
    }
  }

  return {
    handleRemoveMeeting,
    ...result,
  }
}
