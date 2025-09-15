import { api } from '@http/api-client'
import type { IPendency } from 'types/pendency'

interface IPendenciesRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
  userId?: string
}

interface IPaginatedPendenciesResponse {
  page: number
  totalPages: number
  offset: number
  limit: number
  pendencies: IPendency[]
}

export async function getRegisteredPendencies({
  filter,
  limit,
  orderBy,
  page,
  userId,
}: IPendenciesRequest): Promise<IPaginatedPendenciesResponse> {
  const searchParams = new URLSearchParams()

  searchParams.set('title', filter)
  searchParams.set('description', filter)

  searchParams.set('orderBy', orderBy)

  searchParams.set('page', page)
  searchParams.set('limit', limit)
  searchParams.set('status', 'PENDING')

  if (userId) {
    searchParams.set('userId', userId)
  }

  return await api.get(`pendency?${searchParams}`).json()
}
