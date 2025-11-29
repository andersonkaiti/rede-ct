import { zodResolver } from '@hookform/resolvers/zod'
import { createRegionalCongressPartner } from '@http/congress/regional/partner/create-regional-congress-partner'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const MAX_IMAGE_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

export const createPartnerSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  logo: z.any().refine(
    (value) =>
      validateImageFile({
        value,
        optional: false,
      }),
    `Deve haver uma imagem de no máximo ${MAX_IMAGE_SIZE_BYTES}MB.`,
  ),
})

export type CreatePartnerInput = z.infer<typeof createPartnerSchema>

export function useCreatePartner(congressId: string) {
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<CreatePartnerInput>({
    resolver: zodResolver(createPartnerSchema),
    values: {
      name: '',
      logo: undefined,
    },
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values: CreatePartnerInput) => {
    try {
      await createRegionalCongressPartner(congressId, values)

      toast.success('Parceiro adicionado com sucesso.')

      router.replace(
        `/area-restrita/congressos-regionais/parceiros/${congressId}`,
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
