import { zodResolver } from '@hookform/resolvers/zod'
import { createRedeCTHighlight } from '@http/redect-highlights/create-redect-highlight'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_IMAGE_SIZE_MB = 5
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

const createRedeCTHighlightSchema = z.object({
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

type CreateRedeCTHighlightInput = z.infer<typeof createRedeCTHighlightSchema>

const INITIAL_VALUES: CreateRedeCTHighlightInput = {
  type: 'PERSON',
  name: '',
  description: '',
  honorableMention: false,
  honoredAt: new Date(),
  meritUrl: '',
  image: undefined,
}

export function useCreateRedeCTHighlight() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateRedeCTHighlightInput>({
    resolver: zodResolver(createRedeCTHighlightSchema),
    defaultValues: INITIAL_VALUES,
  })

  const submit = form.handleSubmit(async (values) => {
    try {
      await createRedeCTHighlight(values)

      toast.success('Destaque cadastrado com sucesso!')

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
  }
}
