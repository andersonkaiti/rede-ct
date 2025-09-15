import { getPendency } from '@http/documents/pendencies/get-pendency'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { type IUpdateActionState, updatePendencyAction } from '../../../actions'

interface IUseUpdatePendencyProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function useUpdatePendency({ setIsOpen }: IUseUpdatePendencyProps) {
  const queryClient = useQueryClient()

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

  const [{ errors, payload, message, success }, formAction, isLoading] =
    useActionState(
      updatePendencyAction.bind(null, pendencyId),
      {} as IUpdateActionState
    )

  useEffect(() => {
    if (success) {
      queryClient.invalidateQueries({
        queryKey: ['users', 'pendencies', filter, orderBy, page, limit],
      })

      toast.success('Pendência atualizada com sucesso!')

      setIsOpen(false)
    }
  }, [success, setIsOpen, queryClient, filter, limit, orderBy, page])

  return {
    pendency,
    errors,
    payload,
    formAction,
    message,
    isLoading,
  }
}
