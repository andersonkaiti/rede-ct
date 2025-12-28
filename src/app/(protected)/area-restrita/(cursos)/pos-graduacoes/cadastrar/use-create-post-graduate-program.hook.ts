import { zodResolver } from '@hookform/resolvers/zod'
import { createPostGraduateProgram } from '@http/post-graduate-programs/create-post-graduate-program'
import { validateImageFile } from '@utils/validate-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const createPostGraduateProgramSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório.'),
  description: z.string().optional(),
  startDate: z.date('Data de início é obrigatória.'),
  endDate: z.date('Data de término é obrigatória.'),
  contact: z.string().min(1, 'Contato é obrigatório.'),
  registrationLink: z.union([z.url('Link inválido'), z.literal('')]),
  image: z.any().refine((file) =>
    validateImageFile({
      file,
      optional: false,
    }),
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
    submit,
  }
}
