import { zodResolver } from '@hookform/resolvers/zod'
import { getInternationalScientificCongressGalleryImageById } from '@http/congress/international-scientific/gallery/get-international-scientific-congress-gallery-image-by-id'
import { updateInternationalScientificCongressGalleryImage } from '@http/congress/international-scientific/gallery/update-international-scientific-congress-gallery-image'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const updateGalleryImageSchema = z.object({
  image: z
    .any()
    .refine((file) =>
      validateImageFile({
        file,
        optional: true,
      }),
    )
    .optional(),
  caption: z.string().optional(),
})

export type UpdateGalleryImageInput = z.infer<typeof updateGalleryImageSchema>

export function useUpdateGalleryImage() {
  const [serverError, setServerError] = useState<string | null>(null)
  const { congressId, id } = useParams<{ congressId: string; id: string }>()
  const router = useRouter()

  const { data: image } = useSuspenseQuery({
    queryKey: ['gallery-image', id],
    queryFn: () => getInternationalScientificCongressGalleryImageById(id),
  })

  const form = useForm<UpdateGalleryImageInput>({
    resolver: zodResolver(updateGalleryImageSchema),
    values: {
      image: undefined,
      caption: image?.caption ?? '',
    },
  })

  const submit = form.handleSubmit(async (values) => {
    try {
      await updateInternationalScientificCongressGalleryImage({
        ...values,
        id,
      })

      toast.success('Imagem da galeria atualizada com sucesso.')

      router.push(
        `/area-restrita/congressos-cientificos-internacionais/galeria/${congressId}`,
      )
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
    image,
  }
}
