import { zodResolver } from '@hookform/resolvers/zod'
import { createInternationalScientificCongressPartner } from '@http/congress/international-scientific/partner/create-international-scientific-congress-partner'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_LOGO_SIZE_MB = 2

export const createPartnerSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  logo: z.any().refine(
    (value) =>
      validateImageFile({
        value,
        optional: false,
      }),
    `Deve haver uma imagem de no máximo ${MAX_LOGO_SIZE_MB}MB.`,
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
  const { id } = useParams<{ id: string }>()

  const form = useForm<CreatePartnerInput>({
    resolver: zodResolver(createPartnerSchema),
    values: INITIAL_VALUES,
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values: CreatePartnerInput) => {
    try {
      await createInternationalScientificCongressPartner(id, values)

      toast.success('Parceiro adicionado com sucesso.')

      router.replace(
        `/area-restrita/congressos-cientificos-internacionais/parceiros/${id}`,
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
