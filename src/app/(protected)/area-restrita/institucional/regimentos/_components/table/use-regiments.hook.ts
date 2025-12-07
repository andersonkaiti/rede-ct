import { deleteRegiment } from '@http/institutional/regiments/delete-regiment'
import { getRegiments } from '@http/institutional/regiments/get-regiments'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useRegiments() {
	const queryClient = useQueryClient()

	const [{ page, limit }] = useQueryStates({
		page: parseAsString.withDefault(String(DEFAULT_PAGE)),
		limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
	})

	const QUERY_KEY = ['regiments', page, limit]

	const { isLoading, ...rest } = useSuspenseQuery({
		queryKey: QUERY_KEY,
		queryFn: async () =>
			await getRegiments({
				page,
				limit,
			}),
		staleTime: 0,
	})

	async function handleRemoveRegiment(id: string) {
		try {
			await deleteRegiment(id)

			await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

			toast.success('Regimento removido com sucesso!')
		} catch {
			toast.error('Erro ao remover regimento.')
		}
	}

	return {
		isLoading,
		handleRemoveRegiment,
		page,
		limit,
		...rest,
	}
}
