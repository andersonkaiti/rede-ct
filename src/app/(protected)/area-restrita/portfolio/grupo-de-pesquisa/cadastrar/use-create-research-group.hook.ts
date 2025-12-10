import { zodResolver } from '@hookform/resolvers/zod'
import { createResearchGroup } from '@http/research-groups/create-research-group'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const MAX_IMAGE_SIZE_MB = 5
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * MEGABYTE

const createResearchGroupSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório.'),
  acronym: z.string().optional(),
  description: z.string().optional(),
  url: z.union([z.url('URL inválida'), z.literal('')]).optional(),
  foundedAt: z.date('Data de fundação é obrigatória.'),
  scope: z.string().optional(),
  email: z.union([z.email('E-mail inválido'), z.literal('')]).optional(),
  leaderId: z.uuid('Líder é obrigatório.'),
  deputyLeaderId: z.uuid('Vice-líder é obrigatório.'),
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

type CreateResearchGroupInput = z.infer<typeof createResearchGroupSchema>

const INITIAL_VALUES: CreateResearchGroupInput = {
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

export function useCreateResearchGroup() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateResearchGroupInput>({
    resolver: zodResolver(createResearchGroupSchema),
    defaultValues: INITIAL_VALUES,
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values) => {
    try {
      await createResearchGroup(values)

      toast.success('Grupo de pesquisa cadastrado com sucesso!')

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
    isSubmitting,
    submit,
  }
}
