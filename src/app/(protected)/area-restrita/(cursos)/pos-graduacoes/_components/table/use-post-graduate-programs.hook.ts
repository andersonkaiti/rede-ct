import { deletePostGraduateProgramById } from '@http/post-graduate-programs/delete-post-graduate-program'
import { getPostGraduatePrograms } from '@http/post-graduate-programs/get-post-graduate-programs'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function usePostGraduatePrograms() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
  })

  const QUERY_KEY = ['post-graduate-programs', filter, orderBy, page, limit]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () =>
      getPostGraduatePrograms({
        filter,
        orderBy,
        page,
        limit,
      }),
    staleTime: 0,
  })

  async function handleRemoveProgram(id: string) {
    await deletePostGraduateProgramById(id)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Programa de pós-graduação removido com sucesso!')
  }

  return {
    isLoading,
    handleRemoveProgram,
    page,
    limit,
    ...rest,
  }
}
