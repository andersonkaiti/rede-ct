import { zodResolver } from '@hookform/resolvers/zod'
import { getInternationalScientificCongressPartnerById } from '@http/congress/international-scientific/partner/get-international-scientific-congress-partner-by-id'
import { updateInternationalScientificCongressPartner } from '@http/congress/international-scientific/partner/update-international-scientific-congress-partner'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_IMAGE_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

export const updatePartnerSchema = z.object({
  id: z.string().min(1, 'ID é obrigatório.'),
  name: z.string().min(1, 'Nome é obrigatório'),
  logo: z.any().refine((value) =>
    validateImageFile({
      value,
      maxSize: MAX_IMAGE_SIZE_BYTES,
    }),
  ),
})

export type UpdatePartnerInput = z.infer<typeof updatePartnerSchema>

export function useUpdatePartner() {
  const [serverError, setServerError] = useState<string | null>(null)
  const { congressId, id } = useParams<{ congressId: string; id: string }>()
  const router = useRouter()

  const { data: partner } = useSuspenseQuery({
    queryKey: ['congress-partner', id],
    queryFn: () => getInternationalScientificCongressPartnerById(id),
  })

  const form = useForm<UpdatePartnerInput>({
    resolver: zodResolver(updatePartnerSchema),
    values: {
      id: partner?.id ?? '',
      name: partner?.name ?? '',
      logo: undefined,
    },
  })

  const submit = form.handleSubmit(async (values: UpdatePartnerInput) => {
    try {
      await updateInternationalScientificCongressPartner(values)

      toast.success('Parceiro atualizado com sucesso')

      router.push(
        `/area-restrita/congressos-cientificos-internacionais/parceiros/${congressId}`,
      )
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
    partner,
  }
}
