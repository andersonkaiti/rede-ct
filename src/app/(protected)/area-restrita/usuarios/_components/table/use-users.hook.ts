import { demoteUser } from '@http/users/demote-user'
import { getUsers } from '@http/users/get-users'
import { promoteUser } from '@http/users/promote-user'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useUsers() {
  const queryClient = useQueryClient()

  const [{ page, limit, filtro: filter, orderBy }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['users', page, limit, filter, orderBy]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getUsers({
        page,
        limit,
        filter,
        orderBy,
      }),
  })

  async function handlePromoteUser(id: string) {
    try {
      await promoteUser(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Usuário promovido para Admin com sucesso!')
    } catch {
      toast.error('Erro ao promover usuário.')
    }
  }

  async function handleDemoteUser(id: string) {
    try {
      await demoteUser(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Usuário rebaixado para Usuário com sucesso!')
    } catch {
      toast.error('Erro ao rebaixar usuário.')
    }
  }

  return {
    handlePromoteUser,
    handleDemoteUser,
    ...result,
  }
}
