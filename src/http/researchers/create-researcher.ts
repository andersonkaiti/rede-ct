import { api } from '@http/api-client'

interface ICreateResearcherRequest {
  registrationNumber: string
  curriculumUrl?: string
  orcid?: string
  mainEtps?: string
  formations?: string
  degrees: string[]
  occupations: string
  seniority: string
  institutions: string
  biography?: string
  userId: string
}

export async function createResearcher(data: ICreateResearcherRequest) {
  return await api.post('researcher', {
    json: data,
  })
}
