import { api } from '@http/api-client'

interface IContributionsRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
}

interface IPaginatedContributionsResponse {
  page: number
  totalPages: number
  offset: number
  limit: number
  pendencies: {
    title: string
    description: string | null
    status: 'PENDING' | 'PAID'
    id: string
    dueDate: string | null
    documentUrl: string
    createdAt: string
    updatedAt: string
    userId: string
  }[]
}

export async function getAuthenticatedUserContributions({
  filter,
  limit,
  orderBy,
  page,
}: IContributionsRequest): Promise<IPaginatedContributionsResponse> {
  const searchParams = new URLSearchParams()

  searchParams.set('title', filter)
  searchParams.set('description', filter)

  searchParams.set('orderBy', orderBy)

  searchParams.set('page', page)
  searchParams.set('limit', limit)
  searchParams.set('status', 'PAID')

  return await api.get(`auth/pendencies?${searchParams}`).json()
}
