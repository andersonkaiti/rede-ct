import { getRegiments } from '@http/institutional/regiments/get-regiments'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 6
const DEFAULT_TOTAL_PAGES = 1

export function useRegiments() {
	const [{ filtro: filter, orderBy, authorId, page, limit }] = useQueryStates({
		filtro: parseAsString.withDefault(''),
		orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
		authorId: parseAsString.withDefault(''),
		page: parseAsString.withDefault(String(DEFAULT_PAGE)),
		limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
		totalPages: parseAsString.withDefault(String(DEFAULT_TOTAL_PAGES)),
	})

	const result = useQuery({
		queryKey: ['regiments', filter, orderBy, authorId, page, limit],
		queryFn: () =>
			getRegiments({
				orderBy,
				page,
				limit,
				filter,
			}),
	})

	return {
		...result,
		page,
		limit,
	}
}
