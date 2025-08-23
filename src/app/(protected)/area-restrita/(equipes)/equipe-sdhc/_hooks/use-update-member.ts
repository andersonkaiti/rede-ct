'use client'

import { useQueryClient } from '@tanstack/react-query'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { type IActionState, updateSDHCTeamMemberAction } from '../actions'

interface IUseRegisterMemberProps {
  setIsOpen: (isOpen: boolean) => void
  member: {
    id: string
  }
}

const TEAM_TYPE = 'equipe-sdhc'

export function useUpdateSDHCTeamMember({
  setIsOpen,
  member,
}: IUseRegisterMemberProps) {
  const queryClient = useQueryClient()

  const [{ errors, payload, success }, formAction, isLoading] = useActionState<
    IActionState,
    FormData
  >(
    updateSDHCTeamMemberAction.bind(null, {
      member,
    }),
    {} as IActionState
  )

  useEffect(() => {
    if (success) {
      setIsOpen(false)

      queryClient.invalidateQueries({
        queryKey: ['team', TEAM_TYPE],
      })

      toast.success('Membro atualizado com sucesso')
    }
  }, [setIsOpen, queryClient, success])

  return {
    errors,
    payload,
    formAction,
    isLoading,
  }
}
