import { zodResolver } from '@hookform/resolvers/zod'
import { createInternationalScientificCongressGalleryImage } from '@http/congress/international-scientific/gallery/create-international-scientific-congress-gallery-image'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const MAX_IMAGE_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

export const createGalleryImageSchema = z.object({
  image: z
    .instanceof(File, { message: 'A imagem é obrigatória' })
    .refine((file) => file.size <= MAX_IMAGE_SIZE_BYTES, {
      message: `A imagem deve ter no máximo ${MAX_IMAGE_SIZE_MB}MB`,
    })
    .refine(
      (file) =>
        validateImageFile({
          value: file,
          maxSize: MAX_IMAGE_SIZE_BYTES,
        }),
      'Apenas imagens JPEG, PNG ou WebP são permitidas',
    ),
  caption: z.string().optional(),
})

export type CreateGalleryImageInput = z.infer<typeof createGalleryImageSchema>

const INITIAL_VALUES: CreateGalleryImageInput = {
  image: new File([], ''),
  caption: '',
}

export function useCreateGalleryImage() {
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  const form = useForm<CreateGalleryImageInput>({
    resolver: zodResolver(createGalleryImageSchema),
    values: INITIAL_VALUES,
  })

  const submit = form.handleSubmit(async (values: CreateGalleryImageInput) => {
    try {
      await createInternationalScientificCongressGalleryImage({
        congressId: id,
        ...values,
      })

      toast.success('Imagem adicionada à galeria com sucesso.')

      router.replace(
        `/area-restrita/congressos-cientificos-internacionais/galeria/${id}`,
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
