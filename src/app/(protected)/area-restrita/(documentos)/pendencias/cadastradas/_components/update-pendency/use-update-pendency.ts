import { zodResolver } from '@hookform/resolvers/zod'
import { getPendencyById } from '@http/documents/pendencies/get-pendency-by-id'
import { updatePendency } from '@http/documents/pendencies/update-pendency'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const updatePendencySchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Título é obrigatório.'),
  description: z.string().min(1, 'Descrição é obrigatória.'),
  status: z.enum(['PENDING', 'PAID']),
  dueDate: z.date().optional(),
  document: z
    .any()
    .refine(
      (file) => !file || (file instanceof File && file.size > 0),
      'Documento é inválido',
    )
    .optional(),
})

export type UpdatePendencyInput = z.infer<typeof updatePendencySchema>

interface IUseUpdatePendencyProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 6

export function useUpdatePendency({ setIsOpen }: IUseUpdatePendencyProps) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const [{ pendencyId, filtro: filter, orderBy, page, limit, userId }] =
    useQueryStates({
      pendencyId: parseAsString.withDefault(''),
      userId: parseAsString.withDefault(''),
      page: parseAsString.withDefault(String(DEFAULT_PAGE)),
      limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
      filtro: parseAsString.withDefault(''),
      orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
    })

  const { data: pendency } = useQuery({
    queryKey: ['pendency', pendencyId],
    queryFn: () => getPendencyById(pendencyId),
    enabled: !!pendencyId,
  })

  const form = useForm<UpdatePendencyInput>({
    resolver: zodResolver(updatePendencySchema),
    values: {
      id: pendency?.id ?? '',
      title: pendency?.title ?? '',
      description: pendency?.description ?? '',
      status: pendency?.status ?? 'PENDING',
      dueDate: pendency?.dueDate ? new Date(pendency.dueDate) : undefined,
      document: undefined,
    },
    mode: 'onChange',
  })

  const submit = form.handleSubmit(async (values: UpdatePendencyInput) => {
    try {
      await updatePendency(values)

      queryClient.invalidateQueries({
        queryKey: ['users', 'pendencies', filter, orderBy, page, limit, userId],
      })

      toast.success('Pendência atualizada com sucesso!')

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
    pendency,
    form,
    serverError,
    submit,
  }
}
