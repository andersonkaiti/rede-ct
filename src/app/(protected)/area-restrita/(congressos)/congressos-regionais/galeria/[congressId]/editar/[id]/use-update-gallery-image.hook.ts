import { zodResolver } from '@hookform/resolvers/zod'
import { getRegionalCongressGalleryImageById } from '@http/congress/regional/gallery/get-regional-congress-gallery-image-by-id'
import { updateRegionalCongressGalleryImage } from '@http/congress/regional/gallery/update-regional-congress-gallery-image'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const updateGalleryImageSchema = z.object({
  caption: z.string().optional(),
  image: z.any().refine((file) =>
    validateImageFile({
      file,
      optional: true,
    }),
  ),
})

export type UpdateGalleryImageInput = z.infer<typeof updateGalleryImageSchema>

export function useUpdateGalleryImage() {
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()
  const { congressId, id } = useParams<{ congressId: string; id: string }>()

  const { data: galleryImage } = useSuspenseQuery({
    queryKey: ['regional-congress-gallery-image', id],
    queryFn: () => getRegionalCongressGalleryImageById(id),
  })

  const form = useForm<UpdateGalleryImageInput>({
    resolver: zodResolver(updateGalleryImageSchema),
    values: {
      caption: galleryImage?.caption || '',
      image: undefined,
    },
  })

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
    image: galleryImage,
  }
}
