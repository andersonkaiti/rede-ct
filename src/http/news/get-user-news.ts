import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import type { IPaginatedNews } from 'types/news'

interface IGetUserNewsRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
}

export async function getUserNews(
  params: IGetUserNewsRequest
): Promise<IPaginatedNews> {
  const searchParams = parseSearchParams(params)

  return await api
    .get('auth/user/news', {
      searchParams,
    })
    .json()
}
