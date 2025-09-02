import { deleteTeamById } from '@http/teams/delete-team-by-id'
import { getTeams } from '@http/teams/get-teams'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryState } from 'nuqs'
import { useEffect } from 'react'
import { toast } from 'sonner'
import type { ITeam } from 'types/team'

interface IUseManagementTeamProps {
  type: string
}

export function useManagementTeam({ type }: IUseManagementTeamProps) {
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

  async function handleRemoveTeam({ id }: ITeam) {
    await deleteTeamById(id)

    queryClient.setQueryData(QUERY_KEY, (oldTeam: ITeam[] = []) =>
      oldTeam.filter((team) => team.id !== id)
    )

    toast.success('Equipe removida com sucesso!')
  }

  return {
    isLoading,
    handleRemoveTeam,
    ...rest,
  }
}
