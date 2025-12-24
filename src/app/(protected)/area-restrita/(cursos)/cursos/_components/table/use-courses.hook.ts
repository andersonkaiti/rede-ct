import { deleteCourseById } from '@http/courses/delete-course'
import { getCourses } from '@http/courses/get-courses'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useCourses() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
  })

  const QUERY_KEY = ['courses', filter, orderBy, page, limit]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () =>
      getCourses({
        filter,
        orderBy,
        page,
        limit,
      }),
    staleTime: 0,
  })

  async function handleRemoveCourse(id: string) {
    await deleteCourseById(id)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Curso removido com sucesso!')
  }

  return {
    isLoading,
    handleRemoveCourse,
    page,
    limit,
    ...rest,
  }
}
