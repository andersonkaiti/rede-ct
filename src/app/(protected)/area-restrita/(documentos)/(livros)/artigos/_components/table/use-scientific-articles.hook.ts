import { deleteScientificArticleById } from '@http/scientific-articles/delete-scientific-article'
import { getScientificArticles } from '@http/scientific-articles/get-scientific-articles'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useScientificArticles() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['scientific-articles', page, limit, filter, orderBy]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () =>
      getScientificArticles({
        filter,
        orderBy,
        page,
        limit,
      }),
  })

  async function handleRemoveArticle(id: string) {
    await deleteScientificArticleById(id)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Artigo removido com sucesso!')
  }

  return {
    handleRemoveArticle,
    ...result,
  }
}
