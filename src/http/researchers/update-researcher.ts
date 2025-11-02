import { api } from '@http/api-client'

interface IUpdateResearcherRequest {
  id: string
  registrationNumber?: string
  emailAddress?: string
  curriculumUrl?: string | null
  orcid?: string | null
  mainEtps?: string | null
  formations?: string | null
  degrees?: string[]
  occupations?: string
  seniority?: string
  institutions?: string
  biography?: string | null
  userId?: string
}

export async function updateResearcher({
  id,
  ...researcher
}: IUpdateResearcherRequest) {
  await api.put(
    `researcher/${id}
`,
    { json: researcher }
  )
}
