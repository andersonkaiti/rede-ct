import { zodResolver } from '@hookform/resolvers/zod'
import { createMeetingMinute } from '@http/institutional/meetings/minutes/create-minute'
import { deleteMeetingMinute } from '@http/institutional/meetings/minutes/delete-minute'
import { getMeetingMinuteByMeetingId } from '@http/institutional/meetings/minutes/get-minute-by-meeting-id'
import { updateMeetingMinute } from '@http/institutional/meetings/minutes/update-minute'
import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createMinuteSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  publishedAt: z.date('Data de publicação é obrigatória'),
  document: z
    .instanceof(File, { message: 'Arquivo é obrigatório' })
    .refine((file) => !!file && file.size > 0, 'Arquivo é obrigatório'),
  meetingId: z.string().min(1, 'ID da reunião é obrigatório'),
})

export const updateMinuteSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  publishedAt: z.date('Data de publicação é obrigatória'),
  document: z
    .union([
      z
        .instanceof(File)
        .refine((file) => !!file && file.size > 0, 'Arquivo inválido')
        .optional(),
      z.undefined(),
    ])
    .optional(),
  meetingId: z.string().min(1, 'ID da reunião é obrigatório'),
})

export type CreateMinuteInput = z.infer<typeof createMinuteSchema>
export type UpdateMinuteInput = z.infer<typeof updateMinuteSchema>

const INITIAL_VALUES: Partial<CreateMinuteInput> = {
  title: '',
  publishedAt: new Date(),
  document: undefined,
  meetingId: '',
}

export function useUpsertMinute() {
  const [serverError, setServerError] = useState<string | null>(null)

  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const QUERY_KEY = ['minute', id]

  const { data: minute } = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: () => getMeetingMinuteByMeetingId(id),
    staleTime: 0,
  })

  const { mutate: removeMinute } = useMutation({
    mutationKey: QUERY_KEY,
    mutationFn: async () => await deleteMeetingMinute(id),
  })

  const formSchema = minute ? updateMinuteSchema : createMinuteSchema

  const form = useForm<CreateMinuteInput | UpdateMinuteInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...INITIAL_VALUES,
      meetingId: id,
    },
  })

  useEffect(() => {
    if (minute) {
      form.reset({
        title: minute.title,
        publishedAt: new Date(minute.publishedAt),
        document: undefined,
        meetingId: id,
      })
    } else {
      form.reset({
        ...INITIAL_VALUES,
        meetingId: id,
      })
    }
  }, [minute, id, form])

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(
    async (values: CreateMinuteInput | UpdateMinuteInput) => {
      try {
        const alreadyHasMinute = !!minute

        if (alreadyHasMinute) {
          await updateMeetingMinute(values)

          toast.success('Ata atualizada com sucesso.')
        } else {
          await createMeetingMinute(values as CreateMinuteInput)

          toast.success('Ata cadastrada com sucesso.')
        }

        router.replace(`/area-restrita/institucional/reunioes`)
      } catch (err) {
        if (err instanceof HTTPError) {
          const errorBody = await err.response.json()

          setServerError(
            errorBody?.message || 'Ocorreu um erro ao cadastrar a ata.',
          )
        }
      }
    },
  )

  function handleRemoveMinute() {
    removeMinute()

    router.replace(`/area-restrita/institucional/reunioes`)

    toast.success('Ata removida com sucesso.')
  }

  return {
    form,
    serverError,
    submit,
    isSubmitting,
    minute,
    handleRemoveMinute,
  }
}
