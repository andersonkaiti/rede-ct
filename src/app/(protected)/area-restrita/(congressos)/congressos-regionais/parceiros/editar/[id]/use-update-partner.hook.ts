import { zodResolver } from '@hookform/resolvers/zod'
import { getRegionalCongressPartnerById } from '@http/congress/regional/partner/get-regional-congress-partner-by-id'
import { updateRegionalCongressPartner } from '@http/congress/regional/partner/update-regional-congress-partner'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_LOGO_SIZE_MB = 2

export const updatePartnerSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  logo: z.any().refine(
    (value) =>
      validateImageFile({
        value,
        optional: true,
      }),
    `A imagem deve ter no máximo ${MAX_LOGO_SIZE_MB}MB.`,
  ),
})

export type UpdatePartnerInput = z.infer<typeof updatePartnerSchema>

export function useUpdatePartner(id: string, congressId: string) {
  const [serverError, setServerError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const form = useForm<UpdatePartnerInput>({
    resolver: zodResolver(updatePartnerSchema),
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  useEffect(() => {
    async function loadPartner() {
      try {
        const partner = await getRegionalCongressPartnerById(id)

        form.reset({
          name: partner.name,
          logo: undefined,
        })

        setIsLoading(false)
      } catch {
        toast.error('Erro ao carregar parceiro.')

        router.push(
          `/area-restrita/congressos-regionais/parceiros/${congressId}`,
        )
      }
    }

    loadPartner()
  }, [id, congressId, form, router])

  const submit = form.handleSubmit(async (values: UpdatePartnerInput) => {
    try {
      await updateRegionalCongressPartner(id, values)

      toast.success('Parceiro atualizado com sucesso.')

      router.push(`/area-restrita/congressos-regionais/parceiros/${congressId}`)
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
    isLoading,
  }
}
