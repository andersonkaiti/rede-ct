import { demoteUser } from '@http/users/demote-user'
import { getUsers } from '@http/users/get-users'
import { promoteUser } from '@http/users/promote-user'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useUsers() {
  const queryClient = useQueryClient()

  const [{ page, limit, name, emailAddress, phone, lattesUrl, orcid }] =
    useQueryStates({
      page: parseAsString.withDefault(String(DEFAULT_PAGE)),
      limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
      name: parseAsString.withDefault(''),
      emailAddress: parseAsString.withDefault(''),
      phone: parseAsString.withDefault(''),
      lattesUrl: parseAsString.withDefault(''),
      orcid: parseAsString.withDefault(''),
    })

  const QUERY_KEY = [
    'users',
    page,
    limit,
    name,
    emailAddress,
    phone,
    lattesUrl,
    orcid,
  ]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getUsers({
        page,
        limit,
        name: name || undefined,
        emailAddress: emailAddress || undefined,
        phone: phone || undefined,
        lattesUrl: lattesUrl || undefined,
        orcid: orcid || undefined,
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
    isLoading,
    handlePromoteUser,
    handleDemoteUser,
    ...rest,
  }
}
