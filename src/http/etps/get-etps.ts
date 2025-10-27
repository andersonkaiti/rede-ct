import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'

interface IGetETPsRequest {
  page?: string | number
  limit?: string | number
  code?: string
  title?: string
  description?: string
  notes?: string
  userId?: string
  orderBy?: 'asc' | 'desc'
}

// Reuse interfaces from get-etp-by-id.ts context

interface IUserResponse {
  id: string
  name: string
  avatarUrl: string | null
  createdAt: Date
  updatedAt: Date
  emailAddress: string
  orcid: string | null
  phone: string | null
  lattesUrl: string | null
  role: string
}

interface IResearcherResponse {
  id: string
  registrationNumber: string
  mainEtps: string | null
  formations: string | null
  degrees: string[]
  occupations: string
  seniority: string
  institutions: string
  biography: string | null
  createdAt: Date
  updatedAt: Date
  user: IUserResponse
}

interface IETPResearcher {
  etpId: string
  id: string
  researcher: IResearcherResponse
  researcherId: string
}

interface IGetETPsResponse {
  page: number
  totalPages: number
  offset: number
  limit: number
  etps: {
    id: string
    createdAt: Date
    updatedAt: Date
    code: string
    title: string
    description: string | null
    notes: string | null
    leader: IETPResearcher | null
    deputyLeader: IETPResearcher | null
    secretary: IETPResearcher | null
    members: IResearcherResponse[]
  }[]
}

export async function getEtps(
  params: IGetETPsRequest
): Promise<IGetETPsResponse> {
  const searchParams = parseSearchParams(params)

  return await api
    .get('etp', {
      searchParams,
    })
    .json()
}
