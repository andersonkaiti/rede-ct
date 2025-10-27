import { zodResolver } from '@hookform/resolvers/zod'
import { getETPById } from '@http/etps/get-etp-by-id'
import { updateETP } from '@http/etps/update-etp'
import { getResearchers } from '@http/researchers/get-researchers'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { IResearcher } from 'types/etp'
import z from 'zod'

export const updateEtpSchema = z.object({
  id: z.string().min(1, 'ID é obrigatório.'),
  title: z.string().min(1, 'Título é obrigatório.'),
  code: z.string().min(1, 'Código é obrigatório.'),
  description: z.string().optional(),
  notes: z.string().optional(),
  leaderId: z.string().min(1, 'Necessita pelo menos um líder.'),
  deputyLeaderId: z.string().min(1, 'Necessita pelo menos um vice-líder.'),
  secretaryId: z.string().min(1, 'Necessita pelo menos um secretário.'),
  memberIds: z.array(z.uuid()).min(1, 'Necessita pelo menos um membro.'),
})

export type UpdateEtpInput = z.infer<typeof updateEtpSchema>

export function useUpdateETP() {
  const [serverError, setServerError] = useState<string | null>(null)

  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const { data: etp, ...rest } = useQuery({
    queryKey: ['etp', id],
    queryFn: () => getETPById(id),
    enabled: !!id,
  })

  const { data } = useSuspenseQuery({
    queryKey: ['researchers'],
    queryFn: async () => getResearchers({}),
  })

  const form = useForm<UpdateEtpInput>({
    resolver: zodResolver(updateEtpSchema),
    values: {
      id: etp?.id ?? '',
      title: etp?.title ?? '',
      code: etp?.code ?? '',
      description: etp?.description ?? undefined,
      notes: etp?.notes ?? undefined,
      leaderId: etp?.leader?.researcher?.id ?? '',
      deputyLeaderId: etp?.deputyLeader?.researcher?.id ?? '',
      secretaryId: etp?.secretary?.researcher?.id ?? '',
      memberIds: etp?.members?.map((r: IResearcher) => r.id) ?? [],
    },
  })

  const submit = form.handleSubmit(async (values: UpdateEtpInput) => {
    try {
      await updateETP(values)

      toast.success('ETP atualizada com sucesso')

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
    ...rest,
    etp,
    researchers: data?.researchers,
  }
}
