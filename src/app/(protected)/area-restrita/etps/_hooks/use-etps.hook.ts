import { deleteEtp } from '@http/etps/delete-etp'
import { getEtps } from '@http/etps/get-etps'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useEtps() {
  const queryClient = useQueryClient()

  const [{ page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const QUERY_KEY = ['etps', page, limit]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getEtps({
        page,
        limit,
      }),
  })

  async function handleRemoveEtp(id: string) {
    try {
      const response = await deleteEtp(id)

      if (response.ok) {
        await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

        toast.success('ETP removida com sucesso!')
      }
    } catch {
      toast.error('Erro ao remover ETP.')
    }
  }

  return {
    isLoading,
    handleRemoveEtp,
    ...rest,
  }
}
