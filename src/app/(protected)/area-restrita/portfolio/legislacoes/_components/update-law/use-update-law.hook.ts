'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { getLawById } from '@http/laws/get-law-by-id'
import { updateLaw } from '@http/laws/update-law'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { parseAsString, useQueryStates } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const updateLawSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  link: z.url('Link deve ser uma URL válida'),
  country: z.string().min(1, 'País é obrigatório'),
})

export type UpdateLawInput = z.infer<typeof updateLawSchema>

interface IUseUpdateLawProps {
  setIsOpen: (isOpen: boolean) => void
}

export function useUpdateLaw({ setIsOpen }: IUseUpdateLawProps) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const [{ memberId, filtro: filter }] = useQueryStates({
    memberId: parseAsString.withDefault(''),
    filtro: parseAsString.withDefault(''),
  })

  const { data: law } = useQuery({
    queryKey: ['law', memberId],
    queryFn: async () => getLawById(memberId),
  })

  const form = useForm({
    resolver: zodResolver(updateLawSchema),
    values: {
      title: law?.title ?? '',
      link: law?.link ?? '',
      country: law?.country ?? '',
    },
  })

  const submit = form.handleSubmit(async (values: UpdateLawInput) => {
    try {
      await updateLaw({
        id: memberId,
        ...values,
      })

      queryClient.invalidateQueries({
        queryKey: ['laws', filter],
      })

      toast.success('Lei atualizada com sucesso!')

      setIsOpen(false)

      form.reset()
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()

        setServerError(errorBody.message)
      }
    }
  })

  return {
    form,
    serverError,
    submit,
  }
}
