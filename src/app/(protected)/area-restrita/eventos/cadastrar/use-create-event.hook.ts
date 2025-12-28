import { zodResolver } from '@hookform/resolvers/zod'
import { createEvent } from '@http/events/create-event'
import { validateImageFile } from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const createEventSchema = z
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
    image: z.any().refine((file) =>
      validateImageFile({
        file,
      }),
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

type CreateEventInput = z.infer<typeof createEventSchema>

const INITIAL_VALUES: CreateEventInput = {
  title: '',
  description: '',
  startDate: new Date(),
  endDate: new Date(),
  location: '',
  format: 'ONLINE',
  eventLink: '',
  status: 'PENDING',
  image: undefined,
}

export function useCreateEvent() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateEventInput>({
    resolver: zodResolver(createEventSchema),
    defaultValues: INITIAL_VALUES,
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values) => {
    try {
      await createEvent(values)

      toast.success('Evento cadastrado com sucesso!')

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
  }
}
