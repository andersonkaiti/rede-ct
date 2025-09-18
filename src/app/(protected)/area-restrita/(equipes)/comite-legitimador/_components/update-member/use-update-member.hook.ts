'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { getTeamMemberById } from '@http/teams/get-team-member-by-id'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryState } from 'nuqs'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import {
  type LegitimatorCommitteeTeamMemberActionResult,
  updateLegitimatorCommitteeTeamMemberAction,
} from '../../actions'

export const legitimatorCommitteeTeamMemberSchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  role: z.string().trim().min(1, 'Cargo é obrigatório'),
  description: z.string().trim().min(1, 'Descrição é obrigatória'),
})

export type UpdateLegitimatorCommitteeTeamMemberInput = z.infer<
  typeof legitimatorCommitteeTeamMemberSchema
>

interface IUseRegisterMemberProps {
  setIsOpen: (isOpen: boolean) => void
}

const TEAM_TYPE = 'comite-legitimador'

export function useUpdateLegitimatorCommitteeTeamMember({
  setIsOpen,
}: IUseRegisterMemberProps) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const [memberId] = useQueryState('member_id', parseAsString.withDefault(''))

  const { data: member } = useQuery({
    queryKey: ['member', memberId],
    queryFn: () => getTeamMemberById(memberId),
  })

  const form = useForm({
    resolver: zodResolver(legitimatorCommitteeTeamMemberSchema),
    values: {
      description: '',
      role: '',
      userId: '',
    },
  })

  useEffect(() => {
    if (member) {
      form.reset({
        ...member,
        description: member.description || '',
      })
    }
  }, [member, form])

  async function onSubmit(values: UpdateLegitimatorCommitteeTeamMemberInput) {
    const result: LegitimatorCommitteeTeamMemberActionResult =
      await updateLegitimatorCommitteeTeamMemberAction({
        ...values,
        id: memberId,
      })

    if (result.success) {
      queryClient.invalidateQueries({
        queryKey: ['team', TEAM_TYPE],
      })

      queryClient.invalidateQueries({
        queryKey: ['member', memberId],
      })

      toast.success('Membro atualizado com sucesso!')

      setIsOpen(false)

      form.reset()

      return
    }

    setServerError(result.message)
  }

  return {
    member,
    form,
    serverError,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
  }
}
