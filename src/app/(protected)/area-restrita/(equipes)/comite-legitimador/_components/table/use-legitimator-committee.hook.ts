import { deleteLegitimatorCommitteeMemberById } from '@http/teams/legitimator-committee/delete-legitimator-committee-member-by-id'
import { getLegitimatorCommitteeMembers } from '@http/teams/legitimator-committee/get-legitimator-committee-members'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryState } from 'nuqs'
import { toast } from 'sonner'

export function useLegitimatorCommittee() {
  const queryClient = useQueryClient()

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))

  const QUERY_KEY = ['comite-legitimador', filter]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getLegitimatorCommitteeMembers({
        filter,
      }),
  })

  async function handleRemoveMember(teamMemberId: string) {
    if (!teamMemberId) {
      throw new Error('O id do membro é obrigatório!')
    }

    await deleteLegitimatorCommitteeMemberById(teamMemberId)

    queryClient.invalidateQueries({
      queryKey: ['comite-legitimador', filter],
    })

    toast.success('Membro removido com sucesso!')
  }

  return {
    ...result,
    handleRemoveMember,
  }
}
