import { zodResolver } from '@hookform/resolvers/zod'
import { getRedeCTHighlightById } from '@http/redect-highlights/get-redect-highlight-by-id'
import { updateRedeCTHighlight } from '@http/redect-highlights/update-redect-highlight'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_IMAGE_SIZE_MB = 5
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

const updateRedeCTHighlightSchema = z.object({
  type: z.enum(['PERSON', 'INSTITUTION'], 'Tipo é obrigatório.'),
  name: z.string().min(1, 'Nome é obrigatório.'),
  description: z.string().optional(),
  honorableMention: z.boolean(),
  honoredAt: z.date('Data da homenagem é obrigatória.'),
  meritUrl: z.union([z.url('URL inválida'), z.literal('')]).optional(),
  image: z.any().refine(
    (value) =>
      validateImageFile({
        value,
        maxSize: MAX_IMAGE_SIZE_BYTES,
        optional: true,
      }),
    'A imagem deve ser válida de no máximo 5MB.',
  ),
})

type UpdateRedeCTHighlightInput = z.infer<typeof updateRedeCTHighlightSchema>

const INITIAL_VALUES: UpdateRedeCTHighlightInput = {
  type: 'PERSON',
  name: '',
  description: '',
  honorableMention: false,
  honoredAt: new Date(),
  meritUrl: '',
  image: undefined,
}

export function useUpdateRedeCTHighlight() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: highlight } = useSuspenseQuery({
    queryKey: ['redect-highlight', id],
    queryFn: () => getRedeCTHighlightById(id),
  })

  const form = useForm<UpdateRedeCTHighlightInput>({
    resolver: zodResolver(updateRedeCTHighlightSchema),
    defaultValues: INITIAL_VALUES,
  })

  useEffect(() => {
    if (highlight) {
      form.reset({
        type: highlight.type,
        name: highlight.name,
        description: highlight.description || '',
        honorableMention: Boolean(highlight.honorableMention),
        honoredAt: new Date(highlight.honoredAt),
        meritUrl: highlight.meritUrl || '',
        image: undefined,
      })
    }
  }, [highlight, form])

  const submit = form.handleSubmit(async (values) => {
    try {
      await updateRedeCTHighlight({
        id,
        ...values,
      })

      toast.success('Destaque atualizado com sucesso!')
      router.push('/area-restrita/portfolio/destaques-da-redect')
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
    highlight,
  }
}
