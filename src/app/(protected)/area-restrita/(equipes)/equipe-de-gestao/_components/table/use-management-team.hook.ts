import { deleteManagementTeamById } from '@http/teams/management-team/delete-management-team-by-id'
import { getManagementTeam } from '@http/teams/management-team/get-management-team'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { useEffect } from 'react'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useManagementTeam() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
  })

  const QUERY_KEY = ['equipe-de-gestao', filter, orderBy, page, limit]

  const { refetch, isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      getManagementTeam({
        filter,
        orderBy,
        page,
        limit,
      }),
    staleTime: 0,
  })

  useEffect(() => {
    refetch()
  }, [refetch])

  async function handleRemoveTeam(teamId: string) {
    await deleteManagementTeamById(teamId)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Equipe removida com sucesso!')
  }

  return {
    isLoading,
    handleRemoveTeam,
    page,
    limit,
    ...rest,
  }
}
