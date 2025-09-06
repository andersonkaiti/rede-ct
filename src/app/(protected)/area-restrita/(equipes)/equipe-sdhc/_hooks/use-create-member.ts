import { getTeams } from '@http/teams/get-teams'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import type { ISDHCTeam } from '../_components/table/sdhc-team-table-columns'
import { createSDHCTeamMemberAction, type IActionState } from '../actions'

const TEAM_TYPE = 'equipe-sdhc'

export function useCreateSDHCTeamMember(setIsOpen: (isOpen: boolean) => void) {
  const queryClient = useQueryClient()

  const QUERY_KEY = ['team', TEAM_TYPE]

  const { data: teamId } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => await getTeams<ISDHCTeam[]>({ type: TEAM_TYPE }),
    select: (data) => data[0].id,
  })

  const [{ errors, payload, success, message }, formAction, isLoading] =
    useActionState<IActionState, FormData>(
      createSDHCTeamMemberAction.bind(null, teamId ?? ''),
      {} as IActionState
    )

  useEffect(() => {
    if (success) {
      setIsOpen(false)

      queryClient.invalidateQueries({
        queryKey: ['team', TEAM_TYPE],
      })

      toast.success('Membro cadastrado com sucesso!')
    }
  }, [success, setIsOpen, queryClient])

  return {
    errors,
    payload,
    formAction,
    isLoading,
    message,
  }
}
