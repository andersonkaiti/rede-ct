import { zodResolver } from '@hookform/resolvers/zod'
import { createWorkGroupTeamMember } from '@http/teams/work-group-team/create-work-group-member'
import { useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { parseAsString, useQueryState } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createWorkGroupTeamMemberSchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  role: z.string().trim().min(1, 'Cargo é obrigatório'),
  description: z.string().trim().min(1, 'Descrição é obrigatória'),
})

export type CreateWorkGroupTeamMemberInput = z.infer<
  typeof createWorkGroupTeamMemberSchema
>

export function useCreateWorkGroupTeamMember(
  setIsOpen: (isOpen: boolean) => void,
) {
  const queryClient = useQueryClient()

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))

  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm({
    resolver: zodResolver(createWorkGroupTeamMemberSchema),
    values: {
      userId: '',
      description: '',
      role: '',
    },
  })

  const submit = form.handleSubmit(
    async (values: CreateWorkGroupTeamMemberInput) => {
      try {
        await createWorkGroupTeamMember(values)

        queryClient.invalidateQueries({
          queryKey: ['grupo-de-trabalho', filter],
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
