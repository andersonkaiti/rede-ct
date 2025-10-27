import { api } from '@http/api-client'

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

interface IGetETPByIdResponse {
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
}

export async function getETPById(id: string): Promise<IGetETPByIdResponse> {
  return await api.get(`etp/${id}`).json()
}
