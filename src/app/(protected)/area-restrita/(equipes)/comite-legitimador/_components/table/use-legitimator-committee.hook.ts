import { deleteLegitimatorCommitteeMemberById } from '@http/teams/legitimator-committee/delete-legitimator-committee-member-by-id'
import { getLegitimatorCommitteeMembers } from '@http/teams/legitimator-committee/get-legitimator-committee-members'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_FILTER = ''
const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useLegitimatorCommittee() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
  })

  const QUERY_KEY = ['comite-legitimador', filter, orderBy, page, limit]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getLegitimatorCommitteeMembers({
        filter,
        orderBy,
        page,
        limit,
      }),
    staleTime: 0,
  })

  async function handleRemoveMember(teamMemberId: string) {
    if (!teamMemberId) {
      throw new Error('O id do membro é obrigatório!')
    }

    await deleteLegitimatorCommitteeMemberById(teamMemberId)

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
