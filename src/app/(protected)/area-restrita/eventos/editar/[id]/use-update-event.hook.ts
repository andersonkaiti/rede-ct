import { zodResolver } from '@hookform/resolvers/zod'
import { getEventById } from '@http/events/get-event-by-id'
import { updateEvent } from '@http/events/update-event'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_IMAGE_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

const updateEventSchema = z
  .object({
    title: z.string().min(1, 'Título é obrigatório.'),
    description: z.string().optional(),
    startDate: z.date('Data de início é obrigatória.'),
    endDate: z.date('Data de término é obrigatória.'),
    location: z.string().optional(),
    format: z.enum(['ONLINE', 'IN_PERSON'], 'Formato é obrigatório.'),
    eventLink: z.union([z.url('Link inválido'), z.literal('')]).optional(),
    status: z
      .enum(['PENDING', 'CANCELLED', 'FINISHED'])
      .default('PENDING')
      .optional(),
    image: z.any().refine(
      (value) =>
        validateImageFile({
          value,
          maxSize: MAX_IMAGE_SIZE_BYTES,
          optional: true,
        }),
      'A imagem deve ser válida',
    ),
  })
  .refine(
    (data) => {
      if (data.format === 'ONLINE') {
        return !!data.eventLink
      }

      if (data.format === 'IN_PERSON') {
        return !!data.location
      }

      return true
    },
    {
      message:
        'Eventos online devem ter link e eventos presenciais devem ter localização',
      path: ['format'],
    },
  )

type UpdateEventInput = z.infer<typeof updateEventSchema>

export function useUpdateEvent() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const [serverError, setServerError] = useState<string | null>(null)

  const { data: event } = useSuspenseQuery({
    queryKey: ['event', id],
    queryFn: () => getEventById({ id }),
  })

  const form = useForm<UpdateEventInput>({
    resolver: zodResolver(updateEventSchema),
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  useEffect(() => {
    if (event) {
      form.reset({
        title: event.title,
        description: event.description || '',
        startDate: new Date(event.startDate),
        endDate: new Date(event.endDate),
        location: event.location || '',
        format: event.format,
        eventLink: event.eventLink || '',
        status: event.status,
        image: undefined,
      })
    }
  }, [event, form])

  const submit = form.handleSubmit(async (values) => {
    try {
      await updateEvent({ id, ...values })

      toast.success('Evento atualizado com sucesso!')

      router.push('/area-restrita/eventos')
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
    event,
  }
}
