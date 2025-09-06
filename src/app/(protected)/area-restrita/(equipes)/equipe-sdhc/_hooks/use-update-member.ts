'use client'

import { getTeamMemberById } from '@http/teams/get-team-member-by-id'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryState } from 'nuqs'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { type IActionState, updateSDHCTeamMemberAction } from '../actions'

interface IUseRegisterMemberProps {
  setIsOpen: (isOpen: boolean) => void
}

const TEAM_TYPE = 'equipe-sdhc'

export function useUpdateSDHCTeamMember({
  setIsOpen,
}: IUseRegisterMemberProps) {
  const queryClient = useQueryClient()

  const [memberId] = useQueryState('member_id', parseAsString.withDefault(''))

  const { data: member } = useQuery({
    queryKey: ['member', memberId],
    queryFn: () => getTeamMemberById(memberId),
  })

  const [{ errors, payload, success, message }, formAction, isLoading] =
    useActionState<IActionState, FormData>(
      updateSDHCTeamMemberAction.bind(null, {
        member: {
          id: memberId,
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

      queryClient.invalidateQueries({
        queryKey: ['member', memberId],
      })

      toast.success('Membro atualizado com sucesso')
    }
  }, [setIsOpen, queryClient, success, memberId])

  return {
    errors,
    payload,
    formAction,
    isLoading,
    member,
    message,
  }
}
