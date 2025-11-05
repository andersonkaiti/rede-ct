import { deleteManagementTeamById } from '@http/teams/management-team/delete-management-team-by-id'
import { getManagementTeam } from '@http/teams/management-team/get-management-team'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryState } from 'nuqs'
import { useEffect } from 'react'
import { toast } from 'sonner'

export function useManagementTeam() {
  const queryClient = useQueryClient()

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))

  const QUERY_KEY = ['equipe-de-gestao', filter]

  const { refetch, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      getManagementTeam({
        filter,
      }),
  })

  useEffect(() => {
    refetch()
  }, [refetch])

  async function handleRemoveTeam(teamId: string) {
    await deleteManagementTeamById(teamId)

    queryClient.invalidateQueries({
      queryKey: ['equipe-de-gestao', filter],
    })

    toast.success('Equipe removida com sucesso!')
  }

  return {
    handleRemoveTeam,
    ...rest,
  }
}
