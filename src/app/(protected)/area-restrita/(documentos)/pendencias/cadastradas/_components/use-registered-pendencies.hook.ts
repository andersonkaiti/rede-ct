import { getRegisteredPendencies } from '@http/documents/pendencies/get-pendencies'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'
import { useEffect } from 'react'

export function useRegisteredPendencies() {
  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState(
    'order_by',
    parseAsStringEnum(['desc', 'asc']).withDefault('desc')
  )
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('6'))
  const [userId] = useQueryState('user_id', parseAsString.withDefault(''))

  const {
    data: paginatedResults,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users', 'pendencies', filter, orderBy, page, limit, userId],
    queryFn: () =>
      getRegisteredPendencies({
        filter,
        orderBy,
        page,
        limit,
        userId,
      }),
    placeholderData: keepPreviousData,
  })

  useEffect(() => {
    refetch()
  }, [refetch])

  return {
    paginatedResults,
    isLoading,
    page,
  }
}
