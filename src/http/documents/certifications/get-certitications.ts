import { api } from '@http/api-client'

interface ICertificationsRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
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
}: ICertificationsRequest): Promise<IPaginatedCertificationsResponse> {
  const searchParams = new URLSearchParams()

  searchParams.set('title', filter)
  searchParams.set('description', filter)

  searchParams.set('order_by', orderBy)

  searchParams.set('page', page)
  searchParams.set('limit', limit)

  return await api.get(`certification?${searchParams}`).json()
}
