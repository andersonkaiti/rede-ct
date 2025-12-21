import { zodResolver } from '@hookform/resolvers/zod'
import { createBookVolume } from '@http/book-volumes/create-book-volume'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const MAX_FILE_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE

export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * MEGABYTE

const createBookVolumeFormSchema = z.object({
  volumeNumber: z
    .number('Número do volume é obrigatório.')
    .int('Deve ser um número inteiro.')
    .positive('Deve ser um número positivo.'),
  year: z.number('Ano é obrigatório.').int('Deve ser um número inteiro.'),
  title: z.string().min(1, 'Título é obrigatório.'),
  authorId: z.string().uuid('ID do autor deve ser um UUID válido.'),
  accessUrl: z.union([z.url('URL de acesso deve ser válida.'), z.literal('')]),
  catalogSheetUrl: z.union([
    z.url('URL da ficha catalográfica deve ser válida.'),
    z.literal(''),
  ]),
  description: z.string().optional(),
  coverImage: z.instanceof(File).refine((file) =>
    validateImageFile({
      value: file,
      maxSize: MAX_FILE_SIZE_BYTES,
    }),
  ),
})

type CreateBookVolumeFormData = z.infer<typeof createBookVolumeFormSchema>

export function useCreateBookVolume() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateBookVolumeFormData>({
    resolver: zodResolver(createBookVolumeFormSchema),
    defaultValues: {
      volumeNumber: 1,
      year: new Date().getFullYear(),
      title: '',
      authorId: '',
      accessUrl: '',
      catalogSheetUrl: '',
      description: '',
    },
  })

  const submit = form.handleSubmit(async (values: CreateBookVolumeFormData) => {
    setServerError(null)
    try {
      await createBookVolume(values)

      toast.success('Volume criado com sucesso!')

      router.push('/area-restrita/volumes-de-livros')
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()
        setServerError(errorBody.message)
      } else {
        setServerError('Ocorreu um erro inesperado.')
      }
    }
  })

  return {
    form,
    submit,
    serverError,
  }
}
