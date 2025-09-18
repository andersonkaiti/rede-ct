import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import {
  type RegisterCertificationActionResult,
  registerCertificationAction,
} from '../../../actions'

const registerCertificationSchema = z.object({
  userId: z.uuid('id do usuário inválido'),
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  certification: z
    .any()
    .refine(
      (file) => file instanceof File && file.size > 0,
      'Arquivo do certificado é obrigatório'
    ),
})

export type RegisterCertificationInput = z.infer<
  typeof registerCertificationSchema
>

interface IUseRegisterCertificationProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function useRegisterCertification({
  setIsOpen,
}: IUseRegisterCertificationProps) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState(
    'order_by',
    parseAsStringEnum(['desc', 'asc']).withDefault('desc')
  )
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('6'))

  const form = useForm<RegisterCertificationInput>({
    resolver: zodResolver(registerCertificationSchema),
    values: {
      description: '',
      title: '',
      userId: '',
      certification: undefined,
    },
  })

  async function onSubmit(values: RegisterCertificationInput) {
    const result: RegisterCertificationActionResult =
      await registerCertificationAction({
        ...values,
      })

    if (result.success) {
      queryClient.invalidateQueries({
        queryKey: ['users', 'certifications', filter, orderBy, page, limit],
      })

      toast.success('Certificado cadastrado com sucesso!')

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
