import { zodResolver } from '@hookform/resolvers/zod'
import { getPendency } from '@http/documents/pendencies/get-pendency'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import {
  type UpdatePendencyActionResult,
  updatePendencyAction,
} from '../../../actions'

const updatePendencySchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Título é obrigatório.'),
  description: z.string().min(1, 'Descrição é obrigatória.'),
  status: z.enum(['PENDING', 'PAID']),
  dueDate: z.string().optional(),
  document: z
    .any()
    .refine(
      (file) => !file || (file instanceof File && file.size > 0),
      'Documento é inválido'
    )
    .optional(),
})

export type UpdatePendencyInput = z.infer<typeof updatePendencySchema>

interface IUseUpdatePendencyProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function useUpdatePendency({ setIsOpen }: IUseUpdatePendencyProps) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const [pendencyId] = useQueryState(
    'pendency_id',
    parseAsString.withDefault('')
  )

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState(
    'order_by',
    parseAsStringEnum(['desc', 'asc']).withDefault('desc')
  )
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('6'))

  const { data: pendency } = useQuery({
    queryKey: ['pendency', pendencyId],
    queryFn: () => getPendency(pendencyId),
    enabled: !!pendencyId,
  })

  const form = useForm<UpdatePendencyInput>({
    resolver: zodResolver(updatePendencySchema),
    values: {
      id: pendency?.id ?? '',
      title: pendency?.title ?? '',
      description: pendency?.description ?? '',
      status: pendency?.status ?? 'PENDING',
      dueDate: pendency?.dueDate ?? '',
      document: undefined,
    },
    mode: 'onChange',
  })

  async function onSubmit(values: UpdatePendencyInput) {
    const result: UpdatePendencyActionResult = await updatePendencyAction({
      id: values.id,
      title: values.title,
      description: values.description,
      status: values.status,
      dueDate: values.dueDate || undefined,
      document: values.document,
    })

    if (result.success) {
      queryClient.invalidateQueries({
        queryKey: ['users', 'pendencies', filter, orderBy, page, limit],
      })

      toast.success('Pendência atualizada com sucesso!')
      setIsOpen(false)
      return
    }

    setServerError(result.message)
  }

  return {
    pendency,
    form,
    serverError,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
  }
}
