import { api } from '@adapters/index'
import { BASE_URL } from '@config/index'
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

  await api.delete<INews>(`${BASE_URL}/news/${id}`, body)
}
