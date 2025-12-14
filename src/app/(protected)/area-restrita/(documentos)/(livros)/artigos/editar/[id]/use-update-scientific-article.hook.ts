import { zodResolver } from '@hookform/resolvers/zod'
import { getScientificArticleById } from '@http/scientific-articles/get-scientific-article-by-id'
import { updateScientificArticle } from '@http/scientific-articles/update-scientific-article'
import { useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const updateScientificArticleFormSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório.').optional(),
  author: z.string().min(1, 'Autor é obrigatório.').optional(),
  journal: z.string().optional(),
  volume: z.string().optional(),
  edition: z.string().optional(),
  pageStart: z.number().optional(),
  pageEnd: z.number().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  publisher: z.string().optional(),
  description: z.string().optional(),
  year: z.number().optional(),
  accessUrl: z.union([z.url('URL de acesso deve ser válida.'), z.literal('')]),
})

type UpdateScientificArticleFormData = z.infer<
  typeof updateScientificArticleFormSchema
>

export function useUpdateScientificArticle() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: article } = useSuspenseQuery({
    queryKey: ['scientific-article', id],
    queryFn: () => getScientificArticleById(id),
  })

  const form = useForm<UpdateScientificArticleFormData>({
    resolver: zodResolver(updateScientificArticleFormSchema),
    values: {
      title: article?.title ?? '',
      author: article?.author ?? '',
      journal: article?.journal ?? '',
      volume: article?.volume ?? '',
      edition: article?.edition ?? '',
      pageStart: article?.pageStart ?? undefined,
      pageEnd: article?.pageEnd ?? undefined,
      startDate: article?.startDate ? new Date(article.startDate) : undefined,
      endDate: article?.endDate ? new Date(article.endDate) : undefined,
      city: article?.city ?? '',
      state: article?.state ?? '',
      country: article?.country ?? '',
      publisher: article?.publisher ?? '',
      description: article?.description ?? '',
      year: article?.year ?? undefined,
      accessUrl: article?.accessUrl ?? '',
    },
  })

  const submit = form.handleSubmit(
    async (values: UpdateScientificArticleFormData) => {
      try {
        await updateScientificArticle({
          id,
          ...values,
        })

        toast.success('Artigo atualizado com sucesso!')

        router.push('/area-restrita/artigos')
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
    submit,
    serverError,
    article,
  }
}
