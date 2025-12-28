import { zodResolver } from '@hookform/resolvers/zod'
import { getCourseById } from '@http/courses/get-course-by-id'
import { updateCourse } from '@http/courses/update-course'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const updateCourseSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório.'),
  coordinatorId: z.string().min(1, 'Coordenador é obrigatório.'),
  email: z.email('E-mail inválido.'),
  location: z.string().min(1, 'Localização é obrigatória.'),
  scheduledAt: z.date('Data e hora são obrigatórias.'),
  registrationLink: z.union([z.url('Link inválido'), z.literal('')]),
  description: z.string().optional(),
  image: z.any().refine((file) =>
    validateImageFile({
      file,
      optional: true,
    }),
  ),
  instructorIds: z
    .array(z.uuid())
    .min(1, 'Pelo menos um(a) instrutor(a) é obrigatório(a).'),
})

type UpdateCourseInput = z.infer<typeof updateCourseSchema>

export function useUpdateCourse() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: course } = useSuspenseQuery({
    queryKey: ['course', id],
    queryFn: () => getCourseById(id),
  })

  const form = useForm<UpdateCourseInput>({
    resolver: zodResolver(updateCourseSchema),
    values: {
      title: course?.title ?? '',
      coordinatorId: course?.coordinator.id ?? '',
      email: course?.email ?? '',
      location: course?.location ?? '',
      scheduledAt: course?.scheduledAt
        ? new Date(course.scheduledAt)
        : new Date(),
      registrationLink: course?.registrationLink ?? '',
      description: course?.description ?? '',
      image: undefined,
      instructorIds:
        course?.instructors.map((instructor) => instructor.id) ?? [],
    },
  })

  const submit = form.handleSubmit(async (values) => {
    setServerError(null)

    try {
      await updateCourse({
        id,
        title: values.title,
        coordinatorId: values.coordinatorId,
        email: values.email,
        location: values.location,
        scheduledAt: new Date(values.scheduledAt),
        registrationLink: values.registrationLink || undefined,
        description: values.description,
        image: values.image,
        instructorIds: values.instructorIds,
      })

      toast.success('Curso atualizado com sucesso!')
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
    course,
  }
}
