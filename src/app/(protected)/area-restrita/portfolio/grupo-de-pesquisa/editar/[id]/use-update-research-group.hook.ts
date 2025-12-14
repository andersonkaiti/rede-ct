import { zodResolver } from '@hookform/resolvers/zod'
import { getResearchGroupById } from '@http/research-groups/get-research-group-by-id'
import { updateResearchGroup } from '@http/research-groups/update-research-group'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_IMAGE_SIZE_MB = 5
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

const updateResearchGroupSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório.'),
  acronym: z.string().optional(),
  description: z.string().optional(),
  url: z.union([z.url('URL inválida'), z.literal('')]).optional(),
  foundedAt: z.date('Data de fundação é obrigatória.'),
  scope: z.string().optional(),
  email: z.union([z.email('E-mail inválido'), z.literal('')]).optional(),
  leaderId: z.string().min(1, 'Líder é obrigatório.'),
  deputyLeaderId: z.string().min(1, 'Vice-líder é obrigatório.'),
  logo: z.any().refine(
    (value) =>
      validateImageFile({
        value,
        maxSize: MAX_IMAGE_SIZE_BYTES,
        optional: true,
      }),
    'O logo deve ser uma imagem válida de no máximo 5MB.',
  ),
})

type UpdateResearchGroupInput = z.infer<typeof updateResearchGroupSchema>

const INITIAL_VALUES: UpdateResearchGroupInput = {
  name: '',
  acronym: '',
  description: '',
  url: '',
  foundedAt: new Date(),
  scope: '',
  email: '',
  leaderId: '',
  deputyLeaderId: '',
  logo: undefined,
}

export function useUpdateResearchGroup() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: researchGroup } = useSuspenseQuery({
    queryKey: ['research-group', id],
    queryFn: () => getResearchGroupById(id),
  })

  const form = useForm<UpdateResearchGroupInput>({
    resolver: zodResolver(updateResearchGroupSchema),
    defaultValues: INITIAL_VALUES,
  })

  useEffect(() => {
    if (researchGroup) {
      form.reset({
        name: researchGroup.name,
        acronym: researchGroup.acronym || '',
        description: researchGroup.description || '',
        url: researchGroup.url || '',
        foundedAt: new Date(researchGroup.foundedAt),
        scope: researchGroup.scope || '',
        email: researchGroup.email || '',
        leaderId: researchGroup.leader.id,
        deputyLeaderId: researchGroup.deputyLeader.id,
        logo: undefined,
      })
    }
  }, [researchGroup, form])

  const submit = form.handleSubmit(async (values) => {
    try {
      await updateResearchGroup({
        id,
        ...values,
      })

      toast.success('Grupo de pesquisa atualizado com sucesso!')
      router.push('/area-restrita/portfolio/grupo-de-pesquisa')
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
    researchGroup,
  }
}
