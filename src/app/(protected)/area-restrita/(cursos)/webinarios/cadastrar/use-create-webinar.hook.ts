import { zodResolver } from '@hookform/resolvers/zod'
import { createWebinar } from '@http/webinars/create-webinar'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_IMAGE_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

const createWebinarSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório.'),
  description: z.string().optional(),
  scheduledAt: z.date('Data e hora são obrigatórias.'),
  webinarLink: z.union([z.url('Link inválido'), z.literal('')]),
  thumbnail: z.any().refine(
    (value) =>
      validateImageFile({
        value,
        maxSize: MAX_IMAGE_SIZE_BYTES,
        optional: false,
      }),
    'A thumbnail é obrigatória',
  ),
  guestIds: z
    .array(z.uuid())
    .min(1, 'Pelo menos um(a) convidado(a) é obrigatório(a).'),
})

type CreateWebinarInput = z.infer<typeof createWebinarSchema>

const INITIAL_VALUES: CreateWebinarInput = {
  title: '',
  description: '',
  scheduledAt: new Date(),
  webinarLink: '',
  thumbnail: undefined,
  guestIds: [],
}

export function useCreateWebinar() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateWebinarInput>({
    resolver: zodResolver(createWebinarSchema),
    defaultValues: INITIAL_VALUES,
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values) => {
    try {
      await createWebinar(values)

      toast.success('Webinário cadastrado com sucesso!')

      router.push('/area-restrita/webinarios')
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
