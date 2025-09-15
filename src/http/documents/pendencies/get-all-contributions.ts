import { api } from '@http/api-client'

interface IContributionsRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
  userId?: string
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

export async function getAllContributions({
  filter,
  limit,
  orderBy,
  page,
  userId,
}: IContributionsRequest): Promise<IPaginatedContributionsResponse> {
  const searchParams = new URLSearchParams()

  searchParams.set('title', filter)
  searchParams.set('description', filter)

  searchParams.set('orderBy', orderBy)

  searchParams.set('page', page)
  searchParams.set('limit', limit)
  searchParams.set('status', 'PAID')

  if (userId) {
    searchParams.set('userId', userId)
  }

  return await api.get(`pendency?${searchParams}`).json()
}
