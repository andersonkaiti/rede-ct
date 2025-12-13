import { deleteMeeting } from '@http/institutional/meetings/delete-meeting'
import { getMeetings } from '@http/institutional/meetings/get-meetings'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useMeetings() {
  const queryClient = useQueryClient()

  const [{ page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const QUERY_KEY = ['meetings', page, limit]

  const { isLoading, ...rest } = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getMeetings({
        page,
        limit,
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
