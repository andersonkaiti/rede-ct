'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { getSDHCTeamMemberById } from '@http/teams/sdhc-team/get-sdhc-member-by-id'
import { updateSDHCTeamMember } from '@http/teams/sdhc-team/update-sdhc-member'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { parseAsString, useQueryStates } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const updateSDHCTeamMemberSchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  role: z.string().trim().min(1, 'Cargo é obrigatório'),
  description: z.string().trim().min(1, 'Descrição é obrigatória'),
})

export type UpdateSDHCTeamMemberInput = z.infer<
  typeof updateSDHCTeamMemberSchema
>

interface IUseRegisterMemberProps {
  setIsOpen: (isOpen: boolean) => void
}

export function useUpdateSDHCTeamMember({
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
    queryFn: async () => getSDHCTeamMemberById(memberId),
  })

  const form = useForm({
    resolver: zodResolver(updateSDHCTeamMemberSchema),
    values: {
      description: member?.description ?? '',
      role: member?.role ?? '',
      userId: member?.userId ?? '',
    },
  })

  const submit = form.handleSubmit(
    async (values: UpdateSDHCTeamMemberInput) => {
      try {
        await updateSDHCTeamMember({
          id: memberId,
          ...values,
        })

        queryClient.invalidateQueries({
          queryKey: ['equipe-sdhc', filter],
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
