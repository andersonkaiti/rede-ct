import { getPartners } from '@http/partners/get-partners'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 9

export function usePartners() {
  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
  })

  const result = useQuery({
    queryKey: ['partners', filter, orderBy, page, limit],
    queryFn: () =>
      getPartners({
        orderBy,
        page,
        limit,
        filter,
        onlyActive: true,
      }),
  })

  return {
    ...result,
    page,
    limit,
  }
}
