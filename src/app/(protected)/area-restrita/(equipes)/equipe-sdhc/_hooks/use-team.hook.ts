import { deleteTeamMemberById } from '@http/teams/delete-team-member-by-id'
import { getTeams } from '@http/teams/get-teams'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import type { ITeam } from 'types/team'
import type { ISDHCTeam } from '../_components/table/sdhc-team-table-columns'

const TEAM_TYPE = 'equipe-sdhc'

export function useSDHCTeam() {
  const queryClient = useQueryClient()

  const QUERY_KEY = ['team', TEAM_TYPE]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => await getTeams<ISDHCTeam[]>({ type: TEAM_TYPE }),
    select: (data) => data[0],
  })

  async function handleRemoveMember(teamMemberId: string) {
    if (!teamMemberId) {
      throw new Error('O id do membro é obrigatório!')
    }

    await deleteTeamMemberById(teamMemberId)

    queryClient.setQueryData(QUERY_KEY, (old: ITeam[]) =>
      old.map((oldTeam) => ({
        ...oldTeam,
        members:
          oldTeam.members.filter((member) => member.id !== teamMemberId) || [],
      }))
    )

    toast.success('Membro removido com sucesso!')
  }

  return {
    ...result,
    handleRemoveMember,
  }
}
