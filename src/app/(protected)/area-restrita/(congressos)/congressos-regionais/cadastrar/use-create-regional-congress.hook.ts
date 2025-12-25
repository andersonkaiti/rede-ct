import { zodResolver } from '@hookform/resolvers/zod'
import { createRegionalCongress } from '@http/congress/regional/create-regional-congress'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createRegionalCongressSchema = z.object({
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

export type CreateRegionalCongressInput = z.infer<
  typeof createRegionalCongressSchema
>

const INITIAL_VALUES: CreateRegionalCongressInput = {
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

export function useCreateRegionalCongress() {
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<CreateRegionalCongressInput>({
    resolver: zodResolver(createRegionalCongressSchema),
    values: INITIAL_VALUES,
  })

  const submit = form.handleSubmit(
    async (values: CreateRegionalCongressInput) => {
      try {
        await createRegionalCongress(values)

        toast.success('Congresso Regional cadastrado com sucesso.')

        router.replace('/area-restrita/congressos-regionais')
      } catch (err) {
        if (err instanceof HTTPError) {
          const errorBody = await err.response.json()

          setServerError(
            errorBody?.message ||
              'Ocorreu um erro ao cadastrar o congresso regional.',
          )
        }
      }
    },
  )

  return {
    form,
    serverError,
    submit,
  }
}
