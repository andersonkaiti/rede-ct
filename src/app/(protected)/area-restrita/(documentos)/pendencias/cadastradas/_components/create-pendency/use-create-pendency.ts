import { zodResolver } from '@hookform/resolvers/zod'
import { createPendency } from '@http/documents/pendencies/create-pendency'
import { useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const registerPendencySchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  status: z.enum(['PENDING', 'PAID']),
  dueDate: z.date().optional(),
  document: z
    .any()
    .refine(
      (file) => file instanceof File && file.size > 0,
      'Documento é obrigatório',
    ),
})

export type RegisterPendencyInput = z.infer<typeof registerPendencySchema>

interface IUseRegisterPendencyProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const INITIAL_VALUES: Omit<RegisterPendencyInput, 'userId'> = {
  title: '',
  description: '',
  status: 'PENDING',
  dueDate: new Date(),
  document: undefined,
}

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 4

export function useRegisterPendency({ setIsOpen }: IUseRegisterPendencyProps) {
  const [{ filtro: filter, orderBy, page, limit, userId }] = useQueryStates({
    userId: parseAsString.withDefault(''),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
  })

  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<RegisterPendencyInput>({
    resolver: zodResolver(registerPendencySchema),
    defaultValues: {
      ...INITIAL_VALUES,
      userId,
    },
    mode: 'onChange',
  })

  const submit = form.handleSubmit(async (values: RegisterPendencyInput) => {
    try {
      await createPendency(values)

      queryClient.invalidateQueries({
        queryKey: ['users', 'pendencies', filter, orderBy, page, limit, userId],
      })

      toast.success('Pendência cadastrada com sucesso!')

      setIsOpen(false)

      form.reset()
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
