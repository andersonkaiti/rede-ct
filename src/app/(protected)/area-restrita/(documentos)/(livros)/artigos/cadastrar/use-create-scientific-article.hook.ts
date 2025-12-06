import { zodResolver } from '@hookform/resolvers/zod'
import { createScientificArticle } from '@http/scientific-articles/create-scientific-article'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const createScientificArticleFormSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório.'),
  author: z.string().min(1, 'Autor é obrigatório.'),
  journal: z.string().optional(),
  volume: z.string().optional(),
  edition: z.string().optional(),
  pageStart: z.number().optional(),
  pageEnd: z.number().optional(),
  startDate: z.date('Data de início é obrigatória.'),
  endDate: z.date('Data de término é obrigatória.'),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  publisher: z.string().optional(),
  description: z.string().optional(),
  year: z.number().optional(),
  accessUrl: z.url('URL de acesso deve ser válida.'),
})

type CreateScientificArticleFormData = z.infer<
  typeof createScientificArticleFormSchema
>

const INITIAL_VALUES: CreateScientificArticleFormData = {
  title: '',
  author: '',
  journal: '',
  volume: '',
  edition: '',
  city: '',
  state: '',
  country: '',
  publisher: '',
  description: '',
  accessUrl: '',
  year: 1,
  endDate: new Date(),
  startDate: new Date(),
  pageEnd: 0,
  pageStart: 0,
}

export function useCreateScientificArticle() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateScientificArticleFormData>({
    resolver: zodResolver(createScientificArticleFormSchema),
    defaultValues: INITIAL_VALUES,
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(
    async (values: CreateScientificArticleFormData) => {
      try {
        await createScientificArticle(values)

        toast.success('Volume criado com sucesso!')

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
    isSubmitting,
    submit,
    serverError,
  }
}
