'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { type CreateNewsActionResult, registerNewsAction } from '../actions'

const BYTES = 1024
const MEGABYTES = BYTES * BYTES
const MAX_FILE_SIZE_MB = 5
const TOTAL_SIZE = MAX_FILE_SIZE_MB * MEGABYTES

export const createNewsSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  content: z.string().min(1, 'Texto é obrigatório'),
  image: z
    .any()
    .refine(
      (value) => {
        if (value instanceof File) {
          return value.size > 0
        }

        if (typeof value === 'string') {
          return value.length > 0
        }

        return false
      },
      { message: 'Imagem é obrigatória' }
    )
    .refine(
      (value) => {
        if (value instanceof File) {
          return value.size <= TOTAL_SIZE
        }

        if (typeof value === 'string') {
          return true
        }

        return false
      },
      { message: 'A imagem deve ter no máximo 5MB' }
    ),
})

export type CreateNewsInput = z.infer<typeof createNewsSchema>

export function useCreateNews() {
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateNewsInput>({
    resolver: zodResolver(createNewsSchema),
    values: {
      title: '',
      content: '',
      image: undefined,
    },
  })

  async function onSubmit(values: CreateNewsInput) {
    const result: CreateNewsActionResult = await registerNewsAction(values)

    if (result.success) {
      toast.success('Notícia cadastrada com sucesso')

      return
    }

    setServerError(result.message)
  }

  return {
    form,
    serverError,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
  }
}
