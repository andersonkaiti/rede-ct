import { zodResolver } from '@hookform/resolvers/zod'
import { createEtp } from '@http/etps/create-etp'
import { getResearchers } from '@http/researchers/get-researchers'
import { useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createEtpSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório.'),
  code: z.string().min(1, 'Código é obrigatório.'),
  description: z.string().optional(),
  notes: z.string().optional(),
  leaderId: z.string().min(1, 'Necessita pelo menos um líder.'),
  deputyLeaderId: z.string().min(1, 'Necessita pelo menos um vice-líder.'),
  secretaryId: z.string().min(1, 'Necessita pelo menos um secretário.'),
  memberIds: z.array(z.uuid()).min(1, 'Necessita pelo menos um membro.'),
})

export type CreateEtpInput = z.infer<typeof createEtpSchema>

export function useCreateETP() {
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()

  const { data } = useSuspenseQuery({
    queryKey: ['researchers'],
    queryFn: async () => getResearchers({}),
  })

  const form = useForm<CreateEtpInput>({
    resolver: zodResolver(createEtpSchema),
    values: {
      title: '',
      code: '',
      description: undefined,
      notes: undefined,
      leaderId: '',
      deputyLeaderId: '',
      secretaryId: '',
      memberIds: [],
    },
  })

  const submit = form.handleSubmit(async (values: CreateEtpInput) => {
    try {
      await createEtp(values)

      toast.success('ETP cadastrada com sucesso')

      router.replace('/area-restrita/etps')
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
    researchers: data.researchers,
  }
}
