import { getAuthenticatedUserPendencies } from '@http/auth/get-user-pendencies'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'

export function usePendencies() {
  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState(
    'order_by',
    parseAsStringEnum(['desc', 'asc']).withDefault('desc')
  )
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('4'))

  const { data: paginatedResults, isLoading } = useQuery({
    queryKey: ['user', 'pendencies', filter, orderBy, page, limit],
    queryFn: () =>
      getAuthenticatedUserPendencies({
        filter,
        orderBy,
        page,
        limit,
      }),
    placeholderData: keepPreviousData,
  })

  return {
    paginatedResults,
    isLoading,
    page,
  }
}
