import { deleteTeamById } from '@http/teams/delete-team-by-id'
import { getTeams } from '@http/teams/get-teams'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryState } from 'nuqs'
import { useEffect } from 'react'
import { toast } from 'sonner'
import type { ITeam } from 'types/team'

export function useManagementTeam(type: string) {
  const queryClient = useQueryClient()

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))

  const QUERY_KEY = ['team', type, filter || '']

  const { isLoading, refetch, ...rest } = useQuery<ITeam[]>({
    queryKey: QUERY_KEY,
    queryFn: () => getTeams({ type, filter }),
  })

  useEffect(() => {
    refetch()
  }, [refetch])

  async function handleRemoveTeam(teamId: string) {
    await deleteTeamById(teamId)

    queryClient.setQueryData(QUERY_KEY, (oldTeam: ITeam[] = []) =>
      oldTeam.filter((team) => team.id !== teamId)
    )

    toast.success('Equipe removida com sucesso!')
  }

  return {
    isLoading,
    handleRemoveTeam,
    ...rest,
  }
}
