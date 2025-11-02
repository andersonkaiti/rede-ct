import { getAuthenticatedUserContributions } from '@http/auth/get-user-contributions'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 4

export function useContributions() {
  const [{ filtro: filter, order_by: orderBy, page, limit }] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    order_by: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const { data, isLoading } = useQuery({
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
    data,
    isLoading,
    page,
    limit,
  }
}
