import { zodResolver } from '@hookform/resolvers/zod'
import { createPartner } from '@http/partners/create-partner'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
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
    `Deve haver uma imagem de no máximo ${MAX_LOGO_SIZE_MB}MB.`
  ),
  websiteUrl: z.url('URL do site deve ser válida').optional().or(z.literal('')),
  description: z.string().optional(),
  category: z.string().optional(),
  since: z.date(),
  isActive: z.boolean(),
})

export type CreatePartnerInput = z.infer<typeof createPartnerSchema>

const INITIAL_VALUES: CreatePartnerInput = {
  name: '',
  logo: undefined,
  websiteUrl: '',
  description: '',
  category: '',
  since: new Date(),
  isActive: true,
}

export function useCreatePartner() {
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<CreatePartnerInput>({
    resolver: zodResolver(createPartnerSchema),
    values: INITIAL_VALUES,
  })

  const submit = form.handleSubmit(async (values: CreatePartnerInput) => {
    try {
      await createPartner(values)

      toast.success('Parceiro cadastrado com sucesso')

      router.replace('/area-restrita/parceiros-e-financiadores')
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
  }
}
