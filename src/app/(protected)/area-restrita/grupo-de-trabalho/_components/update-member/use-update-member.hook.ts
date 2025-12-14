'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { getWorkGroupTeamMemberById } from '@http/teams/work-group-team/get-work-group-member-by-id'
import { updateWorkGroupTeamMember } from '@http/teams/work-group-team/update-work-group-member'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { parseAsString, useQueryStates } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const updateWorkGroupTeamMemberSchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  role: z.string().trim().min(1, 'Cargo é obrigatório'),
  description: z.string().trim().min(1, 'Descrição é obrigatória'),
})

export type UpdateWorkGroupTeamMemberInput = z.infer<
  typeof updateWorkGroupTeamMemberSchema
>

interface IUseRegisterMemberProps {
  setIsOpen: (isOpen: boolean) => void
}

export function useUpdateWorkGroupTeamMember({
  setIsOpen,
}: IUseRegisterMemberProps) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const [{ memberId, filtro: filter }] = useQueryStates({
    memberId: parseAsString.withDefault(''),
    filtro: parseAsString.withDefault(''),
  })

  const { data: member } = useSuspenseQuery({
    queryKey: ['member', memberId],
    queryFn: async () => getWorkGroupTeamMemberById(memberId),
  })

  const form = useForm({
    resolver: zodResolver(updateWorkGroupTeamMemberSchema),
    values: {
      description: member?.description ?? '',
      role: member?.role ?? '',
      userId: member?.userId ?? '',
    },
  })

  const submit = form.handleSubmit(
    async (values: UpdateWorkGroupTeamMemberInput) => {
      try {
        await updateWorkGroupTeamMember({
          id: memberId,
          ...values,
        })

        queryClient.invalidateQueries({
          queryKey: ['grupo-de-trabalho', filter],
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
    submit,
  }
}
