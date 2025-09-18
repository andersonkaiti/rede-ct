import { zodResolver } from '@hookform/resolvers/zod'
import { getNewsById } from '@http/news/get-news-by-id'
import { useQuery } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { type CreateNewsActionResult, updateNewsAction } from '../../actions'

const BYTES = 1024
const MEGABYTES = BYTES * BYTES
const MAX_FILE_SIZE_MB = 5
const TOTAL_SIZE = MAX_FILE_SIZE_MB * MEGABYTES

export const updateNewsSchema = z.object({
  id: z.uuid(),
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

export type UpdateNewsInput = z.infer<typeof updateNewsSchema>

export function useUpdateNews() {
  const [serverError, setServerError] = useState<string | null>(null)

  const { id } = useParams<{ id: string }>()

  const { data: news, isLoading } = useQuery({
    queryKey: ['news', id],
    queryFn: () => getNewsById(id),
    enabled: !!id,
  })

  const form = useForm({
    resolver: zodResolver(updateNewsSchema),
    values: {
      id,
      title: '',
      content: '',
      image: undefined,
    },
  })

  useEffect(() => {
    if (news) {
      form.reset(news)
    }
  }, [news, form])

  const router = useRouter()

  async function onSubmit(values: UpdateNewsInput) {
    const result: CreateNewsActionResult = await updateNewsAction(values)

    if (result.success) {
      toast.success('Notícia atualizada com sucesso!')

      router.replace('/area-restrita/noticias')

      return
    }

    setServerError(result.message)
  }

  return {
    form,
    serverError,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
    isNewsLoading: isLoading,
    news,
  }
}
