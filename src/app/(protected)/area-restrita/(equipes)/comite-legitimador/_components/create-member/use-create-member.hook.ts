import { zodResolver } from '@hookform/resolvers/zod'
import { createLegitimatorCommitteeMember } from '@http/teams/legitimator-committee/create-legitimator-committee-member'
import { useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { parseAsString, useQueryState } from 'nuqs'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const legitimatorCommitteeTeamMemberSchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  role: z.string().trim().min(1, 'Cargo é obrigatório'),
  description: z.string().trim().min(1, 'Descrição é obrigatória'),
})

export type CreateLegitimatorCommitteeTeamMemberInput = z.infer<
  typeof legitimatorCommitteeTeamMemberSchema
>

export function useCreateLegitimatorCommitteeTeamMember(
  setIsOpen: (isOpen: boolean) => void
) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))

  const form = useForm({
    resolver: zodResolver(legitimatorCommitteeTeamMemberSchema),
    values: {
      userId: '',
      description: '',
      role: '',
    },
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(
    async (values: CreateLegitimatorCommitteeTeamMemberInput) => {
      try {
        await createLegitimatorCommitteeMember(values)

        queryClient.invalidateQueries({
          queryKey: ['comite-legitimador', filter],
        })

        toast.success('Membro cadastrado com sucesso!')

        setIsOpen(false)

        form.reset()
      } catch (err) {
        if (err instanceof HTTPError) {
          const errorBody = await err.response.json()

          setServerError(errorBody.message)
        }
      }
    }
  )

  return {
    form,
    serverError,
    isSubmitting,
    submit,
  }
}
