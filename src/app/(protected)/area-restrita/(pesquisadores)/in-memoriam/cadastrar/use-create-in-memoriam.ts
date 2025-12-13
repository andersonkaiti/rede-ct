import { zodResolver } from '@hookform/resolvers/zod'
import { createInMemoriam } from '@http/in-memorian/create-in-memoriam'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const MAX_PHOTO_SIZE_MB = 2

export const createInMemoriamSchema = z
  .object({
    name: z.string().min(1, 'Nome é obrigatório'),
    birthDate: z.date('Data de nascimento é obrigatória.'),
    deathDate: z.date('Data de falecimento é obrigatória.'),
    biography: z.string().optional(),
    photo: z
      .any()
      .refine(
        (value) =>
          validateImageFile({
            value,
          }),
        `A imagem deve ser um arquivo PNG, JPG ou WEBP com no máximo ${MAX_PHOTO_SIZE_MB}MB.`,
      )
      .optional(),
    role: z.enum(['RESEARCHER', 'LEADER']),
  })
  .refine((data) => data.deathDate > data.birthDate, {
    message: 'Data de falecimento deve ser posterior à data de nascimento',
    path: ['deathDate'],
  })

export type CreateInMemoriamInput = z.infer<typeof createInMemoriamSchema>

const INITIAL_VALUES: CreateInMemoriamInput = {
  name: '',
  birthDate: new Date(0),
  deathDate: new Date(0),
  biography: '',
  photo: undefined,
  role: 'RESEARCHER',
}

export function useCreateInMemoriam() {
  const [serverError, setServerError] = useState<string | null>(null)

  const router = useRouter()

  const form = useForm<CreateInMemoriamInput>({
    resolver: zodResolver(createInMemoriamSchema),
    values: INITIAL_VALUES,
  })

  const submit = form.handleSubmit(async (values: CreateInMemoriamInput) => {
    try {
      await createInMemoriam(values)

      toast.success('Membro adicionado ao In Memoriam com sucesso.')

      router.replace('/area-restrita/in-memoriam')
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()
        setServerError(
          errorBody?.message || 'Ocorreu um erro ao cadastrar no In Memoriam.',
        )
      }
    }
  })

  return {
    form,
    serverError,
    submit,
  }
}
