import { zodResolver } from '@hookform/resolvers/zod'
import { getInternationalScientificCongressGalleryImageById } from '@http/congress/international-scientific/gallery/get-international-scientific-congress-gallery-image-by-id'
import { updateInternationalScientificCongressGalleryImage } from '@http/congress/international-scientific/gallery/update-international-scientific-congress-gallery-image'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const MAX_IMAGE_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

export const updateGalleryImageSchema = z.object({
  image: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.size <= MAX_IMAGE_SIZE_BYTES, {
      message: `A imagem deve ter no máximo ${MAX_IMAGE_SIZE_MB}MB`,
    })
    .refine(
      (file) =>
        validateImageFile({
          value: file,
        }),
      'Apenas imagens JPEG, PNG ou WebP são permitidas',
    )
    .optional(),
  caption: z.string().optional(),
})

export type UpdateGalleryImageInput = z.infer<typeof updateGalleryImageSchema>

export function useUpdateGalleryImage() {
  const [serverError, setServerError] = useState<string | null>(null)
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const { data: image, ...rest } = useSuspenseQuery({
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

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values) => {
    try {
      await updateInternationalScientificCongressGalleryImage({
        ...values,
        id,
      })

      toast.success('Imagem da galeria atualizada com sucesso.')

      router.replace(
        `/area-restrita/congressos-cientificos-internacionais/galeria/${image?.congressId}`,
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
    isSubmitting,
    image,
    ...rest,
  }
}
