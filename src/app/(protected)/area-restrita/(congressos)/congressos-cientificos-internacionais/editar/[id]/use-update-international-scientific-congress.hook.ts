import { zodResolver } from '@hookform/resolvers/zod'
import { getInternationalScientificCongressById } from '@http/congress/international-scientific/get-international-scientific-congress-by-id'
import { updateInternationalScientificCongress } from '@http/congress/international-scientific/update-international-scientific-congress'
import { useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const updateInternationalScientificCongressSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  edition: z.number('Edição é obrigatória'),
  startDate: z.date('Data de início é obrigatória'),
  endDate: z.date('Data de término é obrigatória'),
  description: z.string().optional(),
  location: z.string().optional(),
  congressLink: z.union([z.url('Deve ser uma URL válida'), z.literal('')]),
  noticeUrl: z.union([z.url('Deve ser uma URL válida'), z.literal('')]),
  scheduleUrl: z.union([z.url('Deve ser uma URL válida'), z.literal('')]),
  programUrl: z.union([z.url('Deve ser uma URL válida'), z.literal('')]),
  adminReportUrl: z.union([z.url('Deve ser uma URL válida'), z.literal('')]),
  proceedingsUrl: z.union([z.url('Deve ser uma URL válida'), z.literal('')]),
})

export type UpdateInternationalScientificCongressInput = z.infer<
  typeof updateInternationalScientificCongressSchema
>

export function useUpdateInternationalScientificCongress() {
  const [serverError, setServerError] = useState<string | null>(null)
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const { data: congress, ...rest } = useSuspenseQuery({
    queryKey: ['international-scientific-congress', id],
    queryFn: () => getInternationalScientificCongressById(id),
  })

  const form = useForm<UpdateInternationalScientificCongressInput>({
    resolver: zodResolver(updateInternationalScientificCongressSchema),
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

  const submit = form.handleSubmit(async (values) => {
    try {
      await updateInternationalScientificCongress({
        ...values,
        id,
      })

      toast.success(
        'Congresso Científico Internacional atualizado com sucesso.',
      )

      router.replace('/area-restrita/congressos-cientificos-internacionais')
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()
        setServerError(
          errorBody?.message ||
            'Ocorreu um erro ao atualizar o congresso científico internacional.',
        )
      }
    }
  })

  return {
    form,
    serverError,
    submit,
    ...rest,
  }
}
