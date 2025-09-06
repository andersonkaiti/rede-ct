'use client'

import { deleteTeamMemberById } from '@http/teams/delete-team-member-by-id'
import { getTeams } from '@http/teams/get-teams'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import type { ITeam } from 'types/team'

export function useTeam(type: string) {
  const queryClient = useQueryClient()

  const QUERY_KEY = ['team', type]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => getTeams<ITeam[]>({ type }),
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
