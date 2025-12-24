import { deleteInternationalScientificCongressGalleryImage } from '@http/congress/international-scientific/gallery/delete-international-scientific-congress-gallery-image'
import { getInternationalScientificCongressGalleryImages } from '@http/congress/international-scientific/gallery/get-international-scientific-congress-gallery-images'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useGalleryImages() {
  const queryClient = useQueryClient()
  const { congressId } = useParams<{
    congressId: string
  }>()

  const [{ page, limit, filtro: filter, orderBy }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
  })

  const QUERY_KEY = ['gallery-images', congressId, page, limit]

  const { isLoading, ...rest } = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getInternationalScientificCongressGalleryImages({
        id: congressId,
        page,
        limit,
        filter,
        orderBy,
      }),
    staleTime: 0,
  })

  async function handleRemoveGalleryImage(id: string) {
    try {
      await deleteInternationalScientificCongressGalleryImage(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Imagem da galeria removida com sucesso!')
    } catch {
      toast.error('Erro ao remover imagem da galeria.')
    }
  }

  return {
    isLoading,
    handleRemoveGalleryImage,
    page,
    limit,
    ...rest,
  }
}
