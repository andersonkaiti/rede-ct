import { zodResolver } from '@hookform/resolvers/zod'
import { getRegionalCongressGalleryImageById } from '@http/congress/regional/gallery/get-regional-congress-gallery-image-by-id'
import { updateRegionalCongressGalleryImage } from '@http/congress/regional/gallery/update-regional-congress-gallery-image'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_PHOTO_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_PHOTO_SIZE_MB * MEGABYTE

export const updateGalleryImageSchema = z.object({
  caption: z.string().optional(),
  image: z.any().refine((value) =>
    validateImageFile({
      value,
      optional: true,
      maxSize: MAX_IMAGE_SIZE_BYTES,
    }),
  ),
})

export type UpdateGalleryImageInput = z.infer<typeof updateGalleryImageSchema>

export function useUpdateGalleryImage(id: string, congressId: string) {
  const [serverError, setServerError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const form = useForm<UpdateGalleryImageInput>({
    resolver: zodResolver(updateGalleryImageSchema),
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  useEffect(() => {
    async function loadGalleryImage() {
      try {
        const galleryImage = await getRegionalCongressGalleryImageById(id)

        form.reset({
          caption: galleryImage.caption || '',
          image: undefined,
        })

        setIsLoading(false)
      } catch {
        toast.error('Erro ao carregar imagem da galeria.')
        router.push(`/area-restrita/congressos-regionais/galeria/${congressId}`)
      }
    }

    loadGalleryImage()
  }, [id, congressId, form, router])

  const submit = form.handleSubmit(async (values: UpdateGalleryImageInput) => {
    try {
      await updateRegionalCongressGalleryImage(id, values)

      toast.success('Imagem atualizada com sucesso.')

      router.push(`/area-restrita/congressos-regionais/galeria/${congressId}`)
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()

        setServerError(
          errorBody?.message ||
            'Ocorreu um erro ao atualizar a imagem da galeria.',
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
