import { api } from '@adapters/index'
import type { INews } from 'types/news'

export async function deleteNewsById(
  id: string,
  image_url: string | undefined
) {
  const body = image_url
    ? {
        image_url,
      }
    : {}

  await api.delete<INews>(`/news/${id}`, body)
}
