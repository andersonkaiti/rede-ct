import { api } from '@http/api-client'

type Degree = 'DOCTOR' | 'MASTER' | 'BACHELOR' | 'TECHNICAL' | 'POSTGRADUATE'
type Seniority = 'SENIOR' | 'RESEARCHER' | 'JUNIOR' | 'HONOR'

interface IGetResearcherByIdResponse {
  id: string
  registrationNumber: string
  mainEtps: string | null
  formations: string | null
  degrees: Degree[]
  occupations: string
  seniority: Seniority
  institutions: string
  biography: string | null
  createdAt: string
  updatedAt: string
  orcid: string | null
  user: {
    id: string
    name: string
    emailAddress: string
    orcid: string | null
    lattesUrl: string | null
    avatarUrl: string | null
    phone: string | null
    createdAt: string
    updatedAt: string
    role: 'ADMIN' | 'USER'
  }
}

export async function getResearcherById(
  id: string
): Promise<IGetResearcherByIdResponse> {
  return await api.get(`researcher/${id}`).json()
}
