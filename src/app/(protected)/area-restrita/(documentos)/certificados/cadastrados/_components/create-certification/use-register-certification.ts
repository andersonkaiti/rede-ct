import { useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import {
  type IRegisterActionState,
  registerCertificationAction,
} from '../../../actions'

interface IUseRegisterCertificationProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function useRegisterCertification({
  setIsOpen,
}: IUseRegisterCertificationProps) {
  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState(
    'order_by',
    parseAsStringEnum(['desc', 'asc']).withDefault('desc')
  )
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('6'))

  const queryClient = useQueryClient()

  const [{ errors, payload, message, success }, formAction, isLoading] =
    useActionState(registerCertificationAction, {} as IRegisterActionState)

  useEffect(() => {
    if (success) {
      queryClient.invalidateQueries({
        queryKey: ['users', 'certifications', filter, orderBy, page, limit],
      })

      toast.success('Certificado cadastrado com sucesso!')

      setIsOpen(false)
    }
  }, [success, setIsOpen, queryClient, filter, limit, orderBy, page])

  return {
    errors,
    payload,
    formAction,
    message,
    isLoading,
  }
}
