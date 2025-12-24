import { deleteMeeting } from '@http/institutional/meetings/delete-meeting'
import { getMeetings } from '@http/institutional/meetings/get-meetings'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_FILTER = ''
const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useMeetings() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
  })

  const QUERY_KEY = ['meetings', page, limit, filter, orderBy]

  const { isLoading, ...rest } = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getMeetings({
        page,
        limit,
        filter,
        orderBy,
      }),
    staleTime: 0,
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
    isLoading,
    handleRemoveMeeting,
    page,
    limit,
    ...rest,
  }
}
