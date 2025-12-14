import { zodResolver } from '@hookform/resolvers/zod'
import { getInMemoriamById } from '@http/in-memorian/get-in-memoriam-by-id'
import { updateInMemoriam } from '@http/in-memorian/update-in-memoriam'
import { useSuspenseQuery } from '@tanstack/react-query'
import { validateImageFile } from '@utils/validate-image-file'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const MAX_PHOTO_SIZE_MB = 2

export const updateInMemoriamSchema = z
  .object({
    id: z.string().min(1, 'ID é obrigatório'),
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
        `A imagem deve ter no máximo ${MAX_PHOTO_SIZE_MB}MB.`,
      )
      .optional(),
    role: z.enum(['RESEARCHER', 'LEADER']),
  })
  .refine((data) => data.deathDate > data.birthDate, {
    message: 'Data de falecimento deve ser posterior à data de nascimento',
    path: ['deathDate'],
  })

export type UpdateInMemoriamInput = z.infer<typeof updateInMemoriamSchema>

export function useUpdateInMemoriam() {
  const [serverError, setServerError] = useState<string | null>(null)

  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const { data: inMemoriam } = useSuspenseQuery({
    queryKey: ['in-memoriam', id],
    queryFn: () => getInMemoriamById(id),
  })

  const form = useForm<UpdateInMemoriamInput>({
    resolver: zodResolver(updateInMemoriamSchema),
    values: {
      id: inMemoriam?.id ?? '',
      name: inMemoriam?.name ?? '',
      birthDate: inMemoriam?.birthDate
        ? new Date(inMemoriam.birthDate)
        : new Date(0),
      deathDate: inMemoriam?.deathDate
        ? new Date(inMemoriam.deathDate)
        : new Date(0),
      biography: inMemoriam?.biography ?? '',
      photo: undefined,
      role: inMemoriam?.role ?? 'RESEARCHER',
    },
  })

  const { isSubmitting } = useFormState({
    control: form.control,
  })

  const submit = form.handleSubmit(async (values: UpdateInMemoriamInput) => {
    try {
      await updateInMemoriam(values)

      toast.success('Membro do In Memoriam atualizado com sucesso.')

      router.replace('/area-restrita/in-memoriam')
    } catch (err) {
      if (err instanceof HTTPError) {
        const errorBody = await err.response.json()

        setServerError(errorBody?.message)
      }
    }
  })

  return {
    form,
    serverError,
    isSubmitting,
    submit,
    inMemoriam,
  }
}
