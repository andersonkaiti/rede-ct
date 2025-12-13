'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@http/api-client'
import { getLegitimatorCommitteeMemberById } from '@http/teams/legitimator-committee/get-legitimator-committee-member-by-id'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { parseAsString, useQueryStates } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

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

export function useUpdateLegitimatorCommitteeTeamMember({
  setIsOpen,
}: IUseRegisterMemberProps) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const [{ memberId, filtro: filter }] = useQueryStates({
    memberId: parseAsString.withDefault(''),
    filtro: parseAsString.withDefault(''),
  })

  const { data: member } = useQuery({
    queryKey: ['member', memberId],
    queryFn: () => getLegitimatorCommitteeMemberById(memberId),
  })

  const form = useForm({
    resolver: zodResolver(legitimatorCommitteeTeamMemberSchema),
    values: {
      description: member?.description ?? '',
      role: member?.role ?? '',
      userId: member?.userId ?? '',
    },
  })

  const submit = form.handleSubmit(
    async (values: UpdateLegitimatorCommitteeTeamMemberInput) => {
      try {
        await api.put(`team/member/${memberId}`, {
          json: {
            ...values,
            id: memberId,
          },
        })

        queryClient.invalidateQueries({
          queryKey: ['comite-legitimador', filter],
        })

        toast.success('Membro atualizado com sucesso!')

        setIsOpen(false)

        form.reset()
      } catch (err) {
        if (err instanceof HTTPError) {
          const errorBody = await err.response.json()

          setServerError(errorBody.message)
        }
      }
    },
  )

  return {
    member,
    form,
    serverError,
    isSubmitting: form.formState.isSubmitting,
    submit,
  }
}
