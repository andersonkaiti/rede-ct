import { zodResolver } from '@hookform/resolvers/zod'
import { getRegimentById } from '@http/institutional/regiments/get-regiment-by-id'
import { updateRegiment } from '@http/institutional/regiments/update-regiment'
import { useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const updateRegimentSchema = z.object({
  id: z.string().min(1, 'ID é obrigatório'),
  title: z.string().min(1, 'Nome é obrigatório'),
  version: z.string().min(1, 'Versão é obrigatória'),
  publishedAt: z.date('Data de publicação é obrigatória.'),
  document: z
    .any()
    .optional()
    .refine(
      (file) => file === undefined || file === null || file instanceof File,
      'Documento deve ser um arquivo válido',
    ),
  status: z.enum(['DRAFT', 'IN_FORCE', 'REVOKED']),
})

export type UpdateRegimentInput = z.infer<typeof updateRegimentSchema>

export function useUpdateRegiment() {
  const [serverError, setServerError] = useState<string | null>(null)

  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const { data: regiment, ...rest } = useSuspenseQuery({
    queryKey: ['regiment', id],
    queryFn: () => getRegimentById(id),
  })

  const form = useForm<UpdateRegimentInput>({
    resolver: zodResolver(updateRegimentSchema),
    values: {
      id: regiment?.id ?? '',
      title: regiment?.title ?? '',
      version: regiment?.version ?? '',
      publishedAt: new Date(regiment.publishedAt),
      document: undefined,
      status: regiment?.status ?? 'DRAFT',
    },
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values: UpdateRegimentInput) => {
    try {
      await updateRegiment(values)

      toast.success('Regimento atualizado com sucesso.')

      router.replace('/area-restrita/institucional/regimentos')
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()
        setServerError(
          errorBody?.message || 'Ocorreu um erro ao atualizar o Regimento.',
        )
      }
    }
  })

  return {
    form,
    serverError,
    submit,
    regiment,
    isSubmitting,
    ...rest,
  }
}
