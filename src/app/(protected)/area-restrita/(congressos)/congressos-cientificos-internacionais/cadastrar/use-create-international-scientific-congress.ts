import { zodResolver } from '@hookform/resolvers/zod'
import { createInternationalScientificCongress } from '@http/congress/international-scientific/create-international-scientific-congress'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createInternationalScientificCongressSchema = z.object({
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

export type CreateInternationalScientificCongressInput = z.infer<
  typeof createInternationalScientificCongressSchema
>

const INITIAL_VALUES: CreateInternationalScientificCongressInput = {
  title: '',
  edition: 1,
  startDate: new Date(),
  endDate: new Date(),
  description: '',
  location: '',
  congressLink: '',
  noticeUrl: '',
  scheduleUrl: '',
  programUrl: '',
  adminReportUrl: '',
  proceedingsUrl: '',
}

export function useCreateInternationalScientificCongress() {
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<CreateInternationalScientificCongressInput>({
    resolver: zodResolver(createInternationalScientificCongressSchema),
    values: INITIAL_VALUES,
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(
    async (values: CreateInternationalScientificCongressInput) => {
      try {
        await createInternationalScientificCongress(values)

        toast.success(
          'Congresso Científico Internacional cadastrado com sucesso.',
        )

        router.replace('/area-restrita/congressos-cientificos-internacionais')
      } catch (err) {
        if (err instanceof HTTPError) {
          const errorBody = await err.response.json()

          setServerError(
            errorBody?.message ||
              'Ocorreu um erro ao cadastrar o congresso científico internacional.',
          )
        }
      }
    },
  )

  return {
    form,
    serverError,
    submit,
    isSubmitting,
  }
}
