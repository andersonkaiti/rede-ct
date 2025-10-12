import { api } from '@http/api-client'

interface IAuthenticatedUserCertificationsRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
}

interface IAuthenticatedUserCertificationsResponse {
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

export async function getAuthenticatedUserCertifications({
  filter,
  limit,
  orderBy,
  page,
}: IAuthenticatedUserCertificationsRequest): Promise<IAuthenticatedUserCertificationsResponse> {
  const searchParams = new URLSearchParams()

  searchParams.set('title', filter)
  searchParams.set('description', filter)

  searchParams.set('orderBy', orderBy)

  searchParams.set('page', page)
  searchParams.set('limit', limit)

  return await api.get(`auth/certifications?${searchParams}`).json()
}
