import { zodResolver } from '@hookform/resolvers/zod'
import { getWebinarById } from '@http/webinars/get-webinar-by-id'
import { updateWebinar } from '@http/webinars/update-webinar'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const updateWebinarSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório.'),
  description: z.string().optional(),
  scheduledAt: z.date('Data e hora são obrigatórias.'),
  webinarLink: z.union([z.url('Link inválido'), z.literal('')]),
  thumbnail: z.any().refine((file) =>
    validateImageFile({
      file,
      optional: true,
    }),
  ),
  guestIds: z
    .array(z.uuid())
    .min(1, 'Pelo menos um(a) convidado(a) é obrigatório(a).'),
})

type UpdateWebinarInput = z.infer<typeof updateWebinarSchema>

export function useUpdateWebinar() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: webinar } = useSuspenseQuery({
    queryKey: ['webinar', id],
    queryFn: () => getWebinarById(id),
  })

  const form = useForm<UpdateWebinarInput>({
    resolver: zodResolver(updateWebinarSchema),
    values: {
      title: webinar?.title ?? '',
      description: webinar?.description ?? '',
      scheduledAt: webinar?.scheduledAt
        ? new Date(webinar.scheduledAt)
        : new Date(),
      webinarLink: webinar?.webinarLink ?? '',
      thumbnail: undefined,
      guestIds: webinar?.guests.map((guest) => guest.id) ?? [],
    },
  })

  const submit = form.handleSubmit(async (values) => {
    setServerError(null)

    try {
      await updateWebinar({
        id,
        title: values.title,
        description: values.description,
        scheduledAt: new Date(values.scheduledAt),
        webinarLink: values.webinarLink || undefined,
        thumbnail: values.thumbnail,
        guestIds: values.guestIds,
      })

      toast.success('Webinário atualizado com sucesso!')
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
    submit,
    webinar,
  }
}
