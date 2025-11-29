import { zodResolver } from '@hookform/resolvers/zod'
import { getRegionalCongressById } from '@http/congress/regional/get-regional-congress-by-id'
import { updateRegionalCongress } from '@http/congress/regional/update-regional-congress'
import { useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const updateRegionalCongressSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  edition: z.number({ message: 'Edição é obrigatória' }),
  startDate: z.date({ message: 'Data de início é obrigatória' }),
  endDate: z.date({ message: 'Data de término é obrigatória' }),
  description: z.string().optional(),
  location: z.string().optional(),
  congressLink: z.union([z.url('Deve ser uma URL válida'), z.literal('')]),
  noticeUrl: z.union([z.url('Deve ser uma URL válida'), z.literal('')]),
  scheduleUrl: z.union([z.url('Deve ser uma URL válida'), z.literal('')]),
  programUrl: z.union([z.url('Deve ser uma URL válida'), z.literal('')]),
  adminReportUrl: z.union([z.url('Deve ser uma URL válida'), z.literal('')]),
  proceedingsUrl: z.union([z.url('Deve ser uma URL válida'), z.literal('')]),
})

export type UpdateRegionalCongressInput = z.infer<
  typeof updateRegionalCongressSchema
>

export function useUpdateRegionalCongress() {
  const [serverError, setServerError] = useState<string | null>(null)
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const { data: congress, ...rest } = useSuspenseQuery({
    queryKey: ['regional-congress', id],
    queryFn: () => getRegionalCongressById(id),
  })

  const form = useForm<UpdateRegionalCongressInput>({
    resolver: zodResolver(updateRegionalCongressSchema),
    values: {
      title: congress?.title ?? '',
      edition: congress?.edition ?? 1,
      startDate: congress ? new Date(congress.startDate) : new Date(),
      endDate: congress ? new Date(congress.endDate) : new Date(),
      description: congress?.description ?? '',
      location: congress?.location ?? '',
      congressLink: congress?.congressLink ?? '',
      noticeUrl: congress?.noticeUrl ?? '',
      scheduleUrl: congress?.scheduleUrl ?? '',
      programUrl: congress?.programUrl ?? '',
      adminReportUrl: congress?.adminReportUrl ?? '',
      proceedingsUrl: congress?.proceedingsUrl ?? '',
    },
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values) => {
    try {
      await updateRegionalCongress({
        ...values,
        id,
      })

      toast.success('Congresso Regional atualizado com sucesso.')

      router.replace('/area-restrita/congressos-regionais')
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()
        setServerError(
          errorBody?.message ||
            'Ocorreu um erro ao atualizar o congresso regional.',
        )
      }
    }
  })

  return {
    form,
    serverError,
    submit,
    isSubmitting,
    ...rest,
  }
}
