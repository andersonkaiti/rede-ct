import { zodResolver } from '@hookform/resolvers/zod'
import { getPartnerById } from '@http/partners/get-partner-by-id'
import { updatePartner } from '@http/partners/update-partner'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_LOGO_SIZE_MB = 2
export const KILOBYTE = 1024
export const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_LOGO_SIZE_BYTES = MAX_LOGO_SIZE_MB * MEGABYTE

export const updatePartnerSchema = z.object({
  id: z.string().min(1, 'ID é obrigatório.'),
  name: z.string().min(1, 'Nome é obrigatório'),
  logo: z.any().refine((value) =>
    validateImageFile({
      value,
      maxSize: MAX_LOGO_SIZE_BYTES,
    }),
  ),
  websiteUrl: z.url('URL do site deve ser válida').optional().or(z.literal('')),
  description: z.string().optional(),
  category: z.string().optional(),
  since: z.date(),
  isActive: z.boolean(),
})

export type UpdatePartnerInput = z.infer<typeof updatePartnerSchema>

const INITIAL_VALUE_SINCE: UpdatePartnerInput['since'] = new Date()

export function useUpdatePartner() {
  const [serverError, setServerError] = useState<string | null>(null)
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const { data: partner } = useSuspenseQuery({
    queryKey: ['partner', id],
    queryFn: () => getPartnerById(id),
  })

  const form = useForm<UpdatePartnerInput>({
    resolver: zodResolver(updatePartnerSchema),
    values: {
      id: partner?.id ?? '',
      name: partner?.name ?? '',
      logo: undefined,
      websiteUrl: partner?.websiteUrl ?? '',
      description: partner?.description ?? '',
      category: partner?.category ?? '',
      since: INITIAL_VALUE_SINCE,
      isActive: partner?.isActive ?? true,
    },
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values: UpdatePartnerInput) => {
    try {
      await updatePartner(values)
      toast.success('Parceiro atualizado com sucesso')
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
    isSubmitting,
    submit,
    partner,
  }
}
