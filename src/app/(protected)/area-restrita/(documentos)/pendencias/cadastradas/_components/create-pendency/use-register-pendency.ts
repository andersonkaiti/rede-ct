import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import {
  type RegisterPendencyActionResult,
  registerPendencyAction,
} from '../../../actions'

const registerPendencySchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  status: z.enum(['PENDING', 'PAID']),
  dueDate: z.string().optional(),
  document: z
    .any()
    .refine(
      (file) => file instanceof File && file.size > 0,
      'Documento é obrigatório'
    ),
})

export type RegisterPendencyInput = z.infer<typeof registerPendencySchema>

interface IUseRegisterPendencyProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function useRegisterPendency({ setIsOpen }: IUseRegisterPendencyProps) {
  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState(
    'order_by',
    parseAsStringEnum(['desc', 'asc']).withDefault('desc')
  )
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('6'))

  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<RegisterPendencyInput>({
    resolver: zodResolver(registerPendencySchema),
    defaultValues: {
      userId: '',
      title: '',
      description: '',
      status: 'PENDING',
      dueDate: '',
      document: undefined,
    },
    mode: 'onChange',
  })

  async function onSubmit(values: RegisterPendencyInput) {
    const result: RegisterPendencyActionResult = await registerPendencyAction({
      ...values,
      dueDate: values.dueDate || undefined,
    })

    if (result.success) {
      queryClient.invalidateQueries({
        queryKey: ['users', 'pendencies', filter, orderBy, page, limit],
      })

      toast.success('Pendência cadastrada com sucesso!')

      setIsOpen(false)

      form.reset()

      return
    }

    setServerError(result.message)
  }

  return {
    form,
    serverError,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
  }
}
