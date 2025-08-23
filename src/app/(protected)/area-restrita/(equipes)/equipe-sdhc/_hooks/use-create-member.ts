import { useQueryClient } from '@tanstack/react-query'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { useTeam } from '../../_hooks/use-team.hook'
import { createSDHCTeamMemberAction, type IActionState } from '../actions'

const TEAM_TYPE = 'equipe-sdhc'

export function useCreateSDHCTeamMember(setIsOpen: (isOpen: boolean) => void) {
  const queryClient = useQueryClient()

  const { data: team } = useTeam({
    type: TEAM_TYPE,
  })

  const [{ errors, payload, success }, formAction, isLoading] = useActionState<
    IActionState,
    FormData
  >(
    createSDHCTeamMemberAction.bind(null, {
      team: {
        id: team?.[0]?.id || '',
      },
    }),
    {} as IActionState
  )

  useEffect(() => {
    if (success) {
      setIsOpen(false)

      queryClient.invalidateQueries({
        queryKey: ['team', TEAM_TYPE],
      })

      toast.success('Membro cadastrado com sucesso')
    }
  }, [success, setIsOpen, queryClient])

  return {
    errors,
    payload,
    formAction,
    isLoading,
  }
}
