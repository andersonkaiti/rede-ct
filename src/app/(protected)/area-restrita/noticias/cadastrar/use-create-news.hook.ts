'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { createNews } from '@http/news/create-news'
import {
  FILE_VALIDATION_CONSTANTS,
  validateImageFile,
} from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createNewsSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  content: z.string().min(1, 'Texto é obrigatório'),
  image: z.any().refine((value) =>
    validateImageFile({
      file: value,
      maxSize: FILE_VALIDATION_CONSTANTS.MAX_IMAGE_SIZE_BYTES,
    }),
  ),
})

export type CreateNewsInput = z.infer<typeof createNewsSchema>

export function useCreateNews() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateNewsInput>({
    resolver: zodResolver(createNewsSchema),
    values: {
      title: '',
      content: '',
      image: undefined,
    },
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values: CreateNewsInput) => {
    try {
      await createNews(values)

      toast.success('Notícia cadastrada com sucesso')

      router.replace('/area-restrita/noticias')
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
    isSubmitting,
    submit,
  }
}
