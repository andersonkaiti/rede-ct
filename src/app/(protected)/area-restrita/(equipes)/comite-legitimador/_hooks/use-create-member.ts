import { getTeams } from '@http/teams/get-teams'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import type { ILegitimatorCommittee } from '../_components/table/legitimator-committee-table-columns'
import {
  createLegitimatorCommitteeTeamMemberAction,
  type IActionState,
} from '../actions'

const TEAM_TYPE = 'comite-legitimador'

export function useCreateLegitimatorCommitteeTeamMember(
  setIsOpen: (isOpen: boolean) => void
) {
  const queryClient = useQueryClient()

  const QUERY_KEY = ['team', TEAM_TYPE]

  const { data: teamId } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getTeams<ILegitimatorCommittee[]>({ type: TEAM_TYPE }),
    select: (data: ILegitimatorCommittee[]) => data[0].id,
  })

  const [{ errors, payload, success, message }, formAction, isLoading] =
    useActionState<IActionState, FormData>(
      createLegitimatorCommitteeTeamMemberAction.bind(null, teamId ?? ''),
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
    message,
    isLoading,
  }
}
