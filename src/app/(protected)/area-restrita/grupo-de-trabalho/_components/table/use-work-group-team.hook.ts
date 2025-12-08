import { deleteWorkGroupTeamMemberById } from '@http/teams/work-group-team/delete-work-group-member-by-id'
import { getWorkGroupTeamMembers } from '@http/teams/work-group-team/get-work-group-team-members'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = ''
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useWorkGroupTeam() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsString.withDefault(DEFAULT_ORDER_BY),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const QUERY_KEY = ['grupo-de-trabalho', filter, orderBy, page, limit]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getWorkGroupTeamMembers({
        filter,
        orderBy,
        page,
        limit,
      }),
  })

  async function handleRemoveMember(teamMemberId: string) {
    if (!teamMemberId) {
      throw new Error('O id do membro é obrigatório!')
    }

    await deleteWorkGroupTeamMemberById(teamMemberId)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Membro removido com sucesso!')
  }

  return {
    isLoading,
    handleRemoveMember,
    page,
    limit,
    ...rest,
  }
}
