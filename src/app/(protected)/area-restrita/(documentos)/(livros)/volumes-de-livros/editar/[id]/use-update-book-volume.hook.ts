import { zodResolver } from '@hookform/resolvers/zod'
import { getBookVolumeById } from '@http/book-volumes/get-book-volume-by-id'
import { updateBookVolume } from '@http/book-volumes/update-book-volume'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const updateBookVolumeFormSchema = z.object({
  volumeNumber: z
    .number()
    .int('Deve ser um número inteiro.')
    .positive('Deve ser um número positivo.')
    .optional(),
  year: z
    .number()
    .int('Deve ser um número inteiro.')
    .min(1900, 'Ano muito antigo')
    .max(2100, 'Ano muito futuro')
    .optional(),
  title: z.string().min(1, 'Título é obrigatório.').optional(),
  authorId: z.uuid('ID do autor deve ser um UUID válido.').optional(),
  accessUrl: z.union([z.url('URL de acesso deve ser válida.'), z.literal('')]),
  catalogSheetUrl: z.union([
    z.url('URL da ficha catalográfica deve ser válida.'),
    z.literal(''),
  ]),
  description: z.string().optional(),
  coverImage: z
    .any()
    .refine((file) =>
      validateImageFile({
        file,
        optional: true,
      }),
    )
    .optional(),
})

type UpdateBookVolumeFormData = z.infer<typeof updateBookVolumeFormSchema>

export function useUpdateBookVolume() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: bookVolume } = useSuspenseQuery({
    queryKey: ['book-volume', id],
    queryFn: () => getBookVolumeById(id),
  })

  const form = useForm<UpdateBookVolumeFormData>({
    resolver: zodResolver(updateBookVolumeFormSchema),
    values: {
      volumeNumber: bookVolume?.volumeNumber ?? 1,
      year: bookVolume?.year ?? new Date().getFullYear(),
      title: bookVolume?.title ?? '',
      authorId: bookVolume?.author?.id ?? '',
      accessUrl: bookVolume?.accessUrl ?? '',
      catalogSheetUrl: bookVolume?.catalogSheetUrl ?? '',
      description: bookVolume?.description ?? '',
    },
  })

  const submit = form.handleSubmit(async (values: UpdateBookVolumeFormData) => {
    try {
      await updateBookVolume({
        id,
        ...values,
      })

      toast.success('Volume atualizado com sucesso!')

      router.push('/area-restrita/volumes-de-livros')
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()
        setServerError(errorBody.message)
      }
    }
  })

  return {
    form,
    submit,
    serverError,
    bookVolume,
  }
}
