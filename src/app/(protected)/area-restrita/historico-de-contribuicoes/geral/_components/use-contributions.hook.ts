import { getContributions } from '@http/documents/pendencies/get-contributions'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { useEffect } from 'react'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 4

export function useAllContributions() {
  const [{ filtro: filter, orderBy, page, limit, userId }] = useQueryStates({
    userId: parseAsString.withDefault(''),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
  })

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['all', 'contributions', filter, orderBy, page, limit, userId],
    queryFn: () =>
      getContributions({
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
    data,
    isLoading,
    page,
    limit,
  }
}
