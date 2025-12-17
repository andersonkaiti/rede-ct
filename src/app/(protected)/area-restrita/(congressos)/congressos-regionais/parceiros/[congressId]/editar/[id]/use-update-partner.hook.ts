import { zodResolver } from '@hookform/resolvers/zod'
import { getRegionalCongressPartnerById } from '@http/congress/regional/partner/get-regional-congress-partner-by-id'
import { updateRegionalCongressPartner } from '@http/congress/regional/partner/update-regional-congress-partner'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_LOGO_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_LOGO_SIZE_MB * MEGABYTE

export const updatePartnerSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  logo: z.any().refine((value) =>
    validateImageFile({
      value,
      optional: true,
    }),
  ),
})

export type UpdatePartnerInput = z.infer<typeof updatePartnerSchema>

export function useUpdatePartner() {
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()
  const { congressId, id } = useParams<{ congressId: string; id: string }>()

  const { data: partner } = useSuspenseQuery({
    queryKey: ['regional-congress-partner', id],
    queryFn: () => getRegionalCongressPartnerById(id),
  })

  const form = useForm<UpdatePartnerInput>({
    resolver: zodResolver(updatePartnerSchema),
    values: {
      name: partner?.name ?? '',
      logo: undefined,
    },
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values: UpdatePartnerInput) => {
    try {
      await updateRegionalCongressPartner(id, values)

      toast.success('Parceiro atualizado com sucesso.')

      router.push(
        `/area-restrita/congressos-regionais/${congressId}/parceiros/${id}`,
      )
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()

        setServerError(
          errorBody?.message || 'Ocorreu um erro ao atualizar o parceiro.',
        )
      }
    }
  })

  return {
    form,
    serverError,
    submit,
    isSubmitting,
    partner,
  }
}
