import { deleteLegitimatorCommitteeMemberById } from '@http/teams/legitimator-committee/delete-legitimator-committee-member-by-id'
import { getLegitimatorCommitteeMembers } from '@http/teams/legitimator-committee/get-legitimator-committee-members'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useLegitimatorCommittee() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['comite-legitimador', page, limit, filter, orderBy]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getLegitimatorCommitteeMembers({
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

    await deleteLegitimatorCommitteeMemberById(teamMemberId)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Membro removido com sucesso!')
  }

  return {
    handleRemoveMember,
    ...result,
  }
}
