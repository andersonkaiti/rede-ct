import { zodResolver } from '@hookform/resolvers/zod'
import { createCourse } from '@http/courses/create-course'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_IMAGE_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

const createCourseSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório.'),
  coordinatorId: z.uuid('Coordenador é obrigatório.'),
  email: z.email('E-mail inválido.'),
  location: z.string().min(1, 'Localização é obrigatória.'),
  scheduledAt: z.date('Data e hora são obrigatórias.'),
  registrationLink: z.union([z.url('Link inválido'), z.literal('')]),
  description: z.string().optional(),
  image: z.any().refine(
    (value) =>
      validateImageFile({
        value,
        maxSize: MAX_IMAGE_SIZE_BYTES,
        optional: false,
      }),
    'A imagem é obrigatória',
  ),
  instructorIds: z
    .array(z.uuid())
    .min(1, 'Pelo menos um(a) instrutor(a) é obrigatório(a).'),
})

type CreateCourseInput = z.infer<typeof createCourseSchema>

const INITIAL_VALUES: CreateCourseInput = {
  title: '',
  coordinatorId: '',
  email: '',
  location: '',
  scheduledAt: new Date(),
  registrationLink: '',
  description: '',
  image: undefined,
  instructorIds: [],
}

export function useCreateCourse() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateCourseInput>({
    resolver: zodResolver(createCourseSchema),
    defaultValues: INITIAL_VALUES,
  })

  const submit = form.handleSubmit(async (values) => {
    try {
      await createCourse(values)

      toast.success('Curso cadastrado com sucesso!')

      router.push('/area-restrita/cursos')
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
    submit,
  }
}
