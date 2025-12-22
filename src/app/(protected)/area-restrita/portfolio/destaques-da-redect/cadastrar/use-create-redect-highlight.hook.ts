import { zodResolver } from '@hookform/resolvers/zod'
import { createRedeCTHighlight } from '@http/redect-highlights/create-redect-highlight'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const createRedeCTHighlightSchema = z.object({
  type: z.enum(['PERSON', 'INSTITUTION'], { message: 'Tipo é obrigatório.' }),
  description: z.string().optional(),
  honorableMention: z.boolean(),
  honoredAt: z.date({ message: 'Data da homenagem é obrigatória.' }),
  meritUrl: z.union([z.url('URL inválida'), z.literal('')]).optional(),
  userId: z.string().min(1, 'Usuário é obrigatório.'),
})

type CreateRedeCTHighlightInput = z.infer<typeof createRedeCTHighlightSchema>

const INITIAL_VALUES: CreateRedeCTHighlightInput = {
  type: 'PERSON',
  description: '',
  honorableMention: false,
  honoredAt: new Date(),
  meritUrl: '',
  userId: '',
}

export function useCreateRedeCTHighlight() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateRedeCTHighlightInput>({
    resolver: zodResolver(createRedeCTHighlightSchema),
    defaultValues: INITIAL_VALUES,
  })

  const submit = form.handleSubmit(async (values) => {
    try {
      await createRedeCTHighlight(values)

      toast.success('Destaque cadastrado com sucesso!')

      router.push('/area-restrita/portfolio/destaques-da-redect')
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
