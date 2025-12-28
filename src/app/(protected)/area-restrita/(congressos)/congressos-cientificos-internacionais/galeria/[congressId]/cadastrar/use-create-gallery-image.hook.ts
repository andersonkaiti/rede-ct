import { zodResolver } from '@hookform/resolvers/zod'
import { createInternationalScientificCongressGalleryImage } from '@http/congress/international-scientific/gallery/create-international-scientific-congress-gallery-image'
import { validateImageFile } from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createGalleryImageSchema = z.object({
  image: z.any().refine((file) =>
    validateImageFile({
      file,
    }),
  ),
  caption: z.string().optional(),
})

export type CreateGalleryImageInput = z.infer<typeof createGalleryImageSchema>

export function useCreateGalleryImage() {
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()
  const { congressId } = useParams<{ congressId: string }>()

  const form = useForm<CreateGalleryImageInput>({
    resolver: zodResolver(createGalleryImageSchema),
    values: {
      image: new File([], ''),
      caption: '',
    },
  })

  const submit = form.handleSubmit(async (values: CreateGalleryImageInput) => {
    try {
      await createInternationalScientificCongressGalleryImage({
        congressId,
        ...values,
      })

      toast.success('Imagem adicionada à galeria com sucesso.')

      router.replace(
        `/area-restrita/congressos-cientificos-internacionais/galeria/${congressId}`,
      )
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()

        setServerError(
          errorBody?.message ||
            'Ocorreu um erro ao adicionar a imagem à galeria.',
        )
      }
    }
  })

  return {
    form,
    serverError,
    submit,
  }
}
