import { deleteSDHCTeamMemberById } from '@http/teams/sdhc-team/delete-sdhc-member-by-id'
import { getSDHCTeamMembers } from '@http/teams/sdhc-team/get-sdhc-team-member'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryState } from 'nuqs'
import { toast } from 'sonner'

export function useSDHCTeam() {
  const queryClient = useQueryClient()

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))

  const QUERY_KEY = ['equipe-sdhc', filter]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getSDHCTeamMembers({
        filter,
      }),
  })

  async function handleRemoveMember(teamMemberId: string) {
    if (!teamMemberId) {
      throw new Error('O id do membro é obrigatório!')
    }

    await deleteSDHCTeamMemberById(teamMemberId)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Membro removido com sucesso!')
  }

  return {
    ...result,
    handleRemoveMember,
  }
}
