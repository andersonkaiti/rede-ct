import { zodResolver } from '@hookform/resolvers/zod'
import { createRegiment } from '@http/institutional/regiments/create-regiment'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createRegimentSchema = z.object({
  title: z.string().min(1, 'Nome é obrigatório'),
  version: z.string().min(1, 'Versão é obrigatória'),
  publishedAt: z.date('Data de publicação é obrigatória.'),
  document: z
    .any()
    .refine(
      (file) => file instanceof File && file.size > 0,
      'Documento é obrigatório',
    ),
  status: z.enum(['DRAFT', 'IN_FORCE', 'REVOKED']),
})

export type CreateRegimentInput = z.infer<typeof createRegimentSchema>

const INITIAL_VALUES: CreateRegimentInput = {
  title: '',
  version: '',
  publishedAt: new Date(),
  document: undefined,
  status: 'DRAFT',
}

export function useCreateRegiment() {
  const [serverError, setServerError] = useState<string | null>(null)

  const router = useRouter()

  const form = useForm<CreateRegimentInput>({
    resolver: zodResolver(createRegimentSchema),
    values: INITIAL_VALUES,
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values: CreateRegimentInput) => {
    try {
      await createRegiment(values)

      toast.success('Regimento cadastrado com sucesso.')

      router.replace('/area-restrita/institucional/regimentos')
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()
        setServerError(
          errorBody?.message || 'Ocorreu um erro ao cadastrar o Regimento.',
        )
      }
    }
  })

  return {
    form,
    serverError,
    submit,
    isSubmitting,
  }
}
