import { deleteRegionalCongressGalleryImage } from '@http/congress/regional/gallery/delete-regional-congress-gallery-image'
import { getRegionalCongressGalleryImages } from '@http/congress/regional/gallery/get-regional-congress-gallery-images'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useCongressGallery() {
  const { congressId } = useParams<{ congressId: string }>()

  const queryClient = useQueryClient()

  const [{ page, limit, filtro: filter, orderBy }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = [
    'regional-congress-gallery',
    congressId,
    page,
    limit,
    filter,
    orderBy,
  ]

  const result = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getRegionalCongressGalleryImages({
        id: congressId,
        page,
        limit,
        filter,
        orderBy,
      }),
  })

  async function handleRemoveGalleryImage(id: string) {
    try {
      await deleteRegionalCongressGalleryImage(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Imagem removida com sucesso!')
    } catch {
      toast.error('Erro ao remover imagem.')
    }
  }

  return {
    handleRemoveGalleryImage,
    ...result,
  }
}
