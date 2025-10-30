import { zodResolver } from '@hookform/resolvers/zod'
import { getNewsById } from '@http/news/get-news-by-id'
import { updateNews } from '@http/news/update-news'
import { useQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const MAX_FILE_SIZE_MB = 5

export const updateNewsSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1, 'Título é obrigatório'),
  content: z.string().min(1, 'Texto é obrigatório'),
  image: z.any().refine(
    (value) =>
      validateImageFile({
        value,
      }),
    `A imagem deve ter no máximo ${MAX_FILE_SIZE_MB}MB`
  ),
})

export type UpdateNewsInput = z.infer<typeof updateNewsSchema>

export function useUpdateNews() {
  const router = useRouter()
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
      id: news?.id ?? '',
      title: news?.title ?? '',
      content: news?.content ?? '',
      image: undefined,
    },
  })

  const submit = form.handleSubmit(async (values: UpdateNewsInput) => {
    try {
      await updateNews(values)

      toast.success('Notícia atualizada com sucesso!')

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
    isSubmitting: form.formState.isSubmitting,
    submit,
    isNewsLoading: isLoading,
    news,
  }
}
