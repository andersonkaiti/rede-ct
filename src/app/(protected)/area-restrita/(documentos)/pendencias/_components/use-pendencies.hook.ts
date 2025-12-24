import { getAuthenticatedUserPendencies } from '@http/auth/get-user-pendencies'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 4

export function usePendencies() {
  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
  })

  const { data, isLoading } = useQuery({
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
    data,
    isLoading,
    page,
    limit,
  }
}
