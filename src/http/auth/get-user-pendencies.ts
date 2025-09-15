import { api } from '@http/api-client'
import type { IPendency } from 'types/pendency'

interface IPendenciesRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
}

interface IPaginatedPendenciesResponse {
  page: number
  totalPages: number
  offset: number
  limit: number
  pendencies: IPendency[]
}

export async function getAuthenticatedUserPendencies({
  filter,
  limit,
  orderBy,
  page,
}: IPendenciesRequest): Promise<IPaginatedPendenciesResponse> {
  const searchParams = new URLSearchParams()

  searchParams.set('title', filter)
  searchParams.set('description', filter)

  searchParams.set('orderBy', orderBy)

  searchParams.set('page', page)
  searchParams.set('limit', limit)
  searchParams.set('status', 'PENDING')

  return await api.get(`auth/pendencies?${searchParams}`).json()
}
