'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { getReferenceCenterTeamMemberById } from '@http/teams/reference-center-team/get-reference-center-member-by-id'
import { updateReferenceCenterTeamMember } from '@http/teams/reference-center-team/update-reference-center-member'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { parseAsString, useQueryStates } from 'nuqs'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const updateReferenceCenterTeamMemberSchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  role: z.string().trim().min(1, 'Cargo é obrigatório'),
  description: z.string().trim().min(1, 'Descrição é obrigatória'),
})

export type UpdateReferenceCenterTeamMemberInput = z.infer<
  typeof updateReferenceCenterTeamMemberSchema
>

interface IUseRegisterMemberProps {
  setIsOpen: (isOpen: boolean) => void
}

export function useUpdateReferenceCenterTeamMember({
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
    queryFn: async () => getReferenceCenterTeamMemberById(memberId),
  })

  const form = useForm({
    resolver: zodResolver(updateReferenceCenterTeamMemberSchema),
    values: {
      description: member?.description ?? '',
      role: member?.role ?? '',
      userId: member?.userId ?? '',
    },
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(
    async (values: UpdateReferenceCenterTeamMemberInput) => {
      try {
        await updateReferenceCenterTeamMember({
          id: memberId,
          ...values,
        })

        queryClient.invalidateQueries({
          queryKey: ['centro-de-referencia', filter],
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
    isSubmitting,
    submit,
  }
}
