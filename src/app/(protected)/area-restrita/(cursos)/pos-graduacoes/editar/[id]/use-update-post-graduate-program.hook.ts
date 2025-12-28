import { zodResolver } from '@hookform/resolvers/zod'
import { getPostGraduateProgramById } from '@http/post-graduate-programs/get-post-graduate-program-by-id'
import { updatePostGraduateProgram } from '@http/post-graduate-programs/update-post-graduate-program'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const updatePostGraduateProgramSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório.'),
  description: z.string().optional(),
  startDate: z.date('Data de início é obrigatória.'),
  endDate: z.date('Data de término é obrigatória.'),
  contact: z.string().min(1, 'Contato é obrigatório.'),
  registrationLink: z.union([z.url('Link inválido'), z.literal('')]),
  image: z.any().refine((file) =>
    validateImageFile({
      file,
      optional: true,
    }),
  ),
})

type UpdatePostGraduateProgramInput = z.infer<
  typeof updatePostGraduateProgramSchema
>

export function useUpdatePostGraduateProgram() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: program } = useSuspenseQuery({
    queryKey: ['post-graduate-program', id],
    queryFn: () => getPostGraduateProgramById(id),
  })

  const form = useForm<UpdatePostGraduateProgramInput>({
    resolver: zodResolver(updatePostGraduateProgramSchema),
    values: {
      title: program?.title ?? '',
      description: program?.description ?? '',
      startDate: program?.startDate ? new Date(program.startDate) : new Date(),
      endDate: program?.endDate ? new Date(program.endDate) : new Date(),
      contact: program?.contact ?? '',
      registrationLink: program?.registrationLink ?? '',
      image: undefined,
    },
  })

  const submit = form.handleSubmit(async (values) => {
    setServerError(null)

    try {
      await updatePostGraduateProgram({
        id,
        title: values.title,
        description: values.description,
        startDate: new Date(values.startDate),
        endDate: new Date(values.endDate),
        contact: values.contact,
        registrationLink: values.registrationLink || undefined,
        image: values.image,
      })

      toast.success('Programa de pós-graduação atualizado com sucesso!')
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
    submit,
    program,
  }
}
