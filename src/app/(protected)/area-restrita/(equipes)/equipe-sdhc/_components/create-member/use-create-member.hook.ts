import { zodResolver } from '@hookform/resolvers/zod'
import { createSdhcTeamMember } from '@http/teams/sdhc-team/create-sdhc-member'
import { useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { parseAsString, useQueryState } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createSDHCTeamMemberSchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  role: z.string().trim().min(1, 'Cargo é obrigatório'),
  description: z.string().trim().min(1, 'Descrição é obrigatória'),
})

export type CreateSDHCTeamMemberInput = z.infer<
  typeof createSDHCTeamMemberSchema
>

export function useCreateSDHCTeamMember(setIsOpen: (isOpen: boolean) => void) {
  const queryClient = useQueryClient()

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))

  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm({
    resolver: zodResolver(createSDHCTeamMemberSchema),
    values: {
      userId: '',
      description: '',
      role: '',
    },
  })

  const submit = form.handleSubmit(
    async (values: CreateSDHCTeamMemberInput) => {
      try {
        await createSdhcTeamMember(values)

        queryClient.invalidateQueries({
          queryKey: ['equipe-sdhc', filter],
        })

        toast.success('Membro cadastrado com sucesso!')

        setIsOpen(false)

        form.reset()

        return
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
    isSubmitting: form.formState.isSubmitting,
    submit,
  }
}
