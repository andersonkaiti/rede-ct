import { zodResolver } from '@hookform/resolvers/zod'
import { createReferenceCenterTeamMember } from '@http/teams/reference-center-team/create-reference-center-member'
import { useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { parseAsString, useQueryState } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createReferenceCenterTeamMemberSchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  role: z.string().trim().min(1, 'Cargo é obrigatório'),
  description: z.string().trim().min(1, 'Descrição é obrigatória'),
})

export type CreateReferenceCenterTeamMemberInput = z.infer<
  typeof createReferenceCenterTeamMemberSchema
>

export function useCreateReferenceCenterTeamMember(
  setIsOpen: (isOpen: boolean) => void,
) {
  const queryClient = useQueryClient()

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))

  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm({
    resolver: zodResolver(createReferenceCenterTeamMemberSchema),
    values: {
      userId: '',
      description: '',
      role: '',
    },
  })

  const submit = form.handleSubmit(
    async (values: CreateReferenceCenterTeamMemberInput) => {
      try {
        await createReferenceCenterTeamMember(values)

        queryClient.invalidateQueries({
          queryKey: ['centro-de-referencia', filter],
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
    },
  )

  return {
    form,
    serverError,
    submit,
  }
}
