import { zodResolver } from '@hookform/resolvers/zod'
import { createPostGraduateProgram } from '@http/post-graduate-programs/create-post-graduate-program'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_IMAGE_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

const createPostGraduateProgramSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório.'),
  description: z.string().optional(),
  startDate: z.date('Data de início é obrigatória.'),
  endDate: z.date('Data de término é obrigatória.'),
  contact: z.string().min(1, 'Contato é obrigatório.'),
  registrationLink: z.union([z.url('Link inválido'), z.literal('')]),
  image: z.any().refine(
    (value) =>
      validateImageFile({
        value,
        maxSize: MAX_IMAGE_SIZE_BYTES,
        optional: false,
      }),
    'A imagem é obrigatória',
  ),
})

type CreatePostGraduateProgramInput = z.infer<
  typeof createPostGraduateProgramSchema
>

const INITIAL_VALUES: CreatePostGraduateProgramInput = {
  title: '',
  description: '',
  startDate: new Date(),
  endDate: new Date(),
  contact: '',
  registrationLink: '',
  image: undefined,
}

export function useCreatePostGraduateProgram() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreatePostGraduateProgramInput>({
    resolver: zodResolver(createPostGraduateProgramSchema),
    defaultValues: INITIAL_VALUES,
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values) => {
    try {
      await createPostGraduateProgram(values)

      toast.success('Programa de pós-graduação cadastrado com sucesso!')

      router.push('/area-restrita/pos-graduacoes')
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
    isSubmitting,
    submit,
  }
}
