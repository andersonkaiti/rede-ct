import { zodResolver } from '@hookform/resolvers/zod'
import { getCertification } from '@http/documents/certifications/get-certification'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import {
  type UpdateCertificationActionResult,
  updateCertificationAction,
} from '../../../actions'

const updateCertificationSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1, 'Título é obrigatório.'),
  description: z.string().min(1, 'Descrição é obrigatória.'),
  certification: z
    .any()
    .refine(
      (file) => file.size === 0 || (file instanceof File && file.size > 0),
      'Arquivo do certificado é inválido'
    )
    .optional(),
})

export type UpdateCertificationInput = z.infer<typeof updateCertificationSchema>

interface IUseUpdateCertificationProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function useUpdateCertification({
  setIsOpen,
}: IUseUpdateCertificationProps) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const [certificationId] = useQueryState(
    'certification_id',
    parseAsString.withDefault('')
  )
  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState(
    'order_by',
    parseAsStringEnum(['desc', 'asc']).withDefault('desc')
  )
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('6'))

  const { data: certification } = useQuery({
    queryKey: ['certification', certificationId],
    queryFn: () => getCertification(certificationId),
    enabled: !!certificationId,
  })

  const form = useForm<UpdateCertificationInput>({
    resolver: zodResolver(updateCertificationSchema),
    values: {
      id: '',
      title: '',
      description: '',
      certification: undefined,
    },
  })

  useEffect(() => {
    if (certification) {
      form.reset(certification)
    }
  }, [certification, form])

  async function onSubmit(values: UpdateCertificationInput) {
    const result: UpdateCertificationActionResult =
      await updateCertificationAction(values)

    if (result.success) {
      queryClient.invalidateQueries({
        queryKey: ['users', 'certifications', filter, orderBy, page, limit],
      })

      toast.success('Certificado atualizado com sucesso!')

      setIsOpen(false)

      return
    }

    setServerError(result.message)
  }

  return {
    certification,
    form,
    serverError,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
  }
}
