import { zodResolver } from '@hookform/resolvers/zod'
import { createMeeting } from '@http/institutional/meetings/create-meeting'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createMeetingSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  scheduledAt: z.date('Data e horário são obrigatórios'),
  format: z.enum(['ONLINE', 'IN_PERSON'], 'Formato é obrigatório'),
  agenda: z.string().min(1, 'Pauta é obrigatória'),
  meetingLink: z.union([
    z.url('Link da reunião deve ser uma URL válida'),
    z.literal(''),
  ]),
  location: z.union([z.string(), z.literal('')]),
  status: z.enum(['PENDING', 'CANCELLED', 'FINISHED']),
})

export type CreateMeetingInput = z.infer<typeof createMeetingSchema>

const INITIAL_VALUES: CreateMeetingInput = {
  title: '',
  scheduledAt: new Date(),
  format: 'ONLINE',
  agenda: '',
  meetingLink: '',
  location: '',
  status: 'PENDING',
}

export function useCreateMeeting() {
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<CreateMeetingInput>({
    resolver: zodResolver(createMeetingSchema),
    values: INITIAL_VALUES,
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values: CreateMeetingInput) => {
    try {
      await createMeeting(values)

      toast.success('Reunião cadastrada com sucesso.')
      router.replace('/area-restrita/institucional/reunioes')
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()
        setServerError(
          errorBody?.message || 'Ocorreu um erro ao cadastrar a reunião.',
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
