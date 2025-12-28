import { zodResolver } from '@hookform/resolvers/zod'
import { createInternationalScientificCongressPartner } from '@http/congress/international-scientific/partner/create-international-scientific-congress-partner'
import { validateImageFile } from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createPartnerSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  logo: z.any().refine((file) =>
    validateImageFile({
      file,
    }),
  ),
})

export type CreatePartnerInput = z.infer<typeof createPartnerSchema>

const INITIAL_VALUES: CreatePartnerInput = {
  name: '',
  logo: undefined,
}

export function useCreatePartner() {
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()
  const { congressId } = useParams<{ congressId: string }>()

  const form = useForm<CreatePartnerInput>({
    resolver: zodResolver(createPartnerSchema),
    values: INITIAL_VALUES,
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values: CreatePartnerInput) => {
    try {
      await createInternationalScientificCongressPartner(congressId, values)

      toast.success('Parceiro adicionado com sucesso.')

      router.replace(
        `/area-restrita/congressos-cientificos-internacionais/parceiros/${congressId}`,
      )
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()

        setServerError(
          errorBody?.message || 'Ocorreu um erro ao adicionar o parceiro.',
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
