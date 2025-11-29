import { deleteRegionalCongressGalleryImage } from '@http/congress/regional/gallery/delete-regional-congress-gallery-image'
import { getRegionalCongressGalleryImages } from '@http/congress/regional/gallery/get-regional-congress-gallery-images'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 12

export function useCongressGallery() {
  const { id } = useParams<{ id: string }>()

  const queryClient = useQueryClient()

  const [{ page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const QUERY_KEY = ['regional-congress-gallery', id, page, limit]

  const { isLoading, ...rest } = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getRegionalCongressGalleryImages({
        id,
        page: Number(page),
        limit: Number(limit),
      }),
    staleTime: 0,
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
    isLoading,
    handleRemoveGalleryImage,
    page,
    limit,
    ...rest,
  }
}
