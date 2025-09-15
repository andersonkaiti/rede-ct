import { api } from '@http/api-client'

interface ICertificationsRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
  userId: string
}

interface IPaginatedCertificationsResponse {
  page: number
  totalPages: number
  offset: number
  limit: number
  certifications: {
    id: string
    title: string
    description: string
    certificationUrl: string
    userId: string
  }[]
}

export async function getRegisteredCertifications({
  filter,
  limit,
  orderBy,
  page,
  userId,
}: ICertificationsRequest): Promise<IPaginatedCertificationsResponse> {
  const searchParams = new URLSearchParams()

  searchParams.set('title', filter)
  searchParams.set('description', filter)

  searchParams.set('orderBy', orderBy)

  searchParams.set('page', page)
  searchParams.set('limit', limit)

  if (userId) {
    searchParams.set('userId', userId)
  }

  return await api.get(`certification?${searchParams}`).json()
}
