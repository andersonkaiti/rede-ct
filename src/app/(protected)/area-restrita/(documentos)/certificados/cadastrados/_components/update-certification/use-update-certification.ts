import { getCertification } from '@http/documents/certifications/get-certification'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import {
  type IRegisterActionState,
  updateCertificationAction,
} from '../../../actions'

interface IUseUpdateCertificationProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function useUpdateCertification({
  setIsOpen,
}: IUseUpdateCertificationProps) {
  const queryClient = useQueryClient()

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

  const [{ errors, payload, message, success }, formAction, isLoading] =
    useActionState(
      updateCertificationAction.bind(null, certificationId),
      {} as IRegisterActionState
    )

  useEffect(() => {
    if (success) {
      queryClient.invalidateQueries({
        queryKey: ['users', 'certifications', filter, orderBy, page, limit],
      })

      toast.success('Certificado atualizado com sucesso!')

      setIsOpen(false)
    }
  }, [success, setIsOpen, queryClient, filter, orderBy, page, limit])

  return {
    certification,
    errors,
    payload,
    formAction,
    message,
    isLoading,
  }
}
