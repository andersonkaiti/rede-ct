import { api } from '@http/api-client'

interface IGetResearchersRequest {
  page?: string
  limit?: string
}

interface IGetResearchersResponse {
  page: number
  totalPages: number
  offset: number
  limit: number
  researchers: {
    id: string
    registrationNumber: string
    emailAddress: string
    curriculumUrl: string | null
    orcid: string | null
    mainEtps: string | null
    formations: string | null
    degrees: string[]
    occupations: string
    seniority: string
    institutions: string
    biography: string | null
    createdAt: string
    updatedAt: string
    user: {
      id: string
      name: string
      emailAddress: string
      avatarUrl: string | null
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
      createdAt: string
      updatedAt: string
      role: 'ADMIN' | 'USER'
    }
  }[]
}

export async function getResearchers({
  limit,
  page,
}: IGetResearchersRequest): Promise<IGetResearchersResponse> {
  const searchParams = new URLSearchParams()

  if (page) {
    searchParams.set('page', page)
  }

  if (limit) {
    searchParams.set('limit', limit)
  }

  return await api
    .get('researcher', {
      searchParams,
    })
    .json()
}
