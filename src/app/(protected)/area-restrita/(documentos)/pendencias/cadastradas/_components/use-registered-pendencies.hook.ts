import { getRegisteredPendencies } from '@http/documents/pendencies/get-pendencies'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 4

export function useRegisteredPendencies() {
  const [{ filtro: filter, orderBy, page, limit, userId }] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
    userId: parseAsString.withDefault(''),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const { data, isLoading } = useQuery({
    queryKey: ['users', 'pendencies', filter, orderBy, page, limit, userId],
    queryFn: () =>
      getRegisteredPendencies({
        filter,
        orderBy,
        page,
        limit,
        userId,
      }),
  })

  return {
    data,
    isLoading,
    page,
    limit,
  }
}
