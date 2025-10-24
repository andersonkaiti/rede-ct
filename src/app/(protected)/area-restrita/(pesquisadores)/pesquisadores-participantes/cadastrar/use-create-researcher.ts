import { zodResolver } from '@hookform/resolvers/zod'
import { createResearcher } from '@http/researchers/create-researcher'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const createResearcherSchema = z.object({
  registrationNumber: z.string().min(1, 'Matrícula é obrigatória.'),
  mainEtps: z.string().optional(),
  formations: z.string().optional(),
  degrees: z
    .array(
      z.enum(['DOCTOR', 'MASTER', 'BACHELOR', 'TECHNICAL', 'POSTGRADUATE']),
      'Grau inválido.'
    )
    .min(1, 'Pelo menos um grau deve ser selecionado.'),
  occupations: z.string().min(1, 'Ocupação obrigatória.'),
  seniority: z.enum(
    ['SENIOR', 'RESEARCHER', 'JUNIOR', 'HONOR'],
    'Senioridade obrigatória.'
  ),
  institutions: z.string().min(1, 'Instituição obrigatória.'),
  biography: z.string().optional(),
  userId: z.string().min(1, 'Usuário obrigatório.'),
})

export type CreateResearcherInput = z.infer<typeof createResearcherSchema>

export function useCreateResearcher() {
  const [serverError, setServerError] = useState<string | null>(null)

  const router = useRouter()

  const form = useForm<CreateResearcherInput>({
    resolver: zodResolver(createResearcherSchema),
    values: {
      registrationNumber: '',
      mainEtps: '',
      formations: '',
      degrees: [],
      occupations: '',
      seniority: 'JUNIOR',
      institutions: '',
      biography: '',
      userId: '',
    },
  })

  const submit = form.handleSubmit(async (values: CreateResearcherInput) => {
    try {
      const response = await createResearcher(values)

      if (response.ok) {
        toast.success('Pesquisador cadastrado com sucesso')

        router.replace('/area-restrita/pesquisadores-participantes')

        return
      }
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
