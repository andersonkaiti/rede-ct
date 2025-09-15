import { getAllContributions } from '@http/documents/pendencies/get-all-contributions'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'
import { useEffect } from 'react'

export function useAllContributions() {
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
    queryKey: ['all', 'contributions', filter, orderBy, page, limit, userId],
    queryFn: () =>
      getAllContributions({
        filter,
        orderBy,
        page,
        limit,
        userId,
      }),
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
