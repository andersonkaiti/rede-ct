import { zodResolver } from '@hookform/resolvers/zod'
import { getResearcherById } from '@http/researchers/get-researcher-by-id'
import { updateResearcher } from '@http/researchers/update-researcher'
import { useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const updateResearcherSchema = z.object({
  id: z.string().min(1, 'ID é obrigatório.'),
  registrationNumber: z.string().min(1, 'Matrícula é obrigatória.'),
  curriculumUrl: z.string().url('URL do currículo inválida.').optional(),
  orcid: z.string().optional(),
  mainEtps: z.string().optional(),
  formations: z.string().optional(),
  degrees: z.array(
    z.enum(['DOCTOR', 'MASTER', 'BACHELOR', 'TECHNICAL', 'POSTGRADUATE']),
    'Grau inválido.',
  ),
  occupations: z.string('Ocupação obrigatória.'),
  seniority: z.enum(
    ['SENIOR', 'RESEARCHER', 'JUNIOR', 'HONOR'],
    'Senioridade obrigatória.',
  ),
  institutions: z.string('Instituição obrigatória.'),
  biography: z.string().optional(),
})

export type UpdateResearcherInput = z.infer<typeof updateResearcherSchema>

export function useUpdateResearcher() {
  const [serverError, setServerError] = useState<string | null>(null)

  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const { data: researcher } = useSuspenseQuery({
    queryKey: ['researcher', id],
    queryFn: () => getResearcherById(id),
  })

  const form = useForm<UpdateResearcherInput>({
    resolver: zodResolver(updateResearcherSchema),
    values: {
      id: researcher?.id ?? '',
      registrationNumber: researcher?.registrationNumber ?? '',
      orcid: researcher?.user.orcid ?? '',
      mainEtps: researcher?.mainEtps ?? '',
      formations: researcher?.formations ?? '',
      degrees: researcher?.degrees ?? [],
      occupations: researcher?.occupations ?? '',
      seniority: researcher?.seniority ?? 'JUNIOR',
      institutions: researcher?.institutions ?? '',
      biography: researcher?.biography ?? '',
    },
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values: UpdateResearcherInput) => {
    try {
      await updateResearcher(values)

      toast.success('Pesquisador atualizado com sucesso')

      router.replace('/area-restrita/pesquisadores-participantes')
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
    researcher,
  }
}
