import { getAuthenticatedUserContributions } from '@http/auth/get-user-contributions'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'

export function useContributions() {
  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState(
    'order_by',
    parseAsStringEnum(['desc', 'asc']).withDefault('desc')
  )
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('6'))

  const { data: paginatedResults, isLoading } = useQuery({
    queryKey: ['user', 'contributions', filter, orderBy, page, limit],
    queryFn: () =>
      getAuthenticatedUserContributions({
        filter,
        orderBy,
        page,
        limit,
      }),
  })

  return {
    paginatedResults,
    isLoading,
    page,
    limit,
  }
}
