import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetResearchersRequest {
  page?: string
  limit?: string
  filter?: string
}

export const getResearchersSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  researchers: z.array(
    z.object({
      id: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      registrationNumber: z.string(),
      mainEtps: z.string().nullable(),
      formations: z.string().nullable(),
      degrees: z.array(
        z.enum(['DOCTOR', 'MASTER', 'BACHELOR', 'TECHNICAL', 'POSTGRADUATE'])
      ),
      occupations: z.string(),
      seniority: z.enum(['SENIOR', 'RESEARCHER', 'JUNIOR', 'HONOR']),
      institutions: z.string(),
      biography: z.string().nullable(),
      user: z.object({
        id: z.string(),
        name: z.string(),
        emailAddress: z.string(),
        orcid: z.string().nullable(),
        lattesUrl: z.string().nullable(),
        avatarUrl: z.string().nullable(),
        phone: z.string().nullable(),
        createdAt: z.string(),
        updatedAt: z.string(),
        role: z.enum(['ADMIN', 'USER']),
      }),
    })
  ),
})

export async function getResearchers({ filter, ...params }: IGetResearchersRequest) {
  const searchParams = parseSearchParams({
    params,
    registrationNumber: filter,
    name: filter,
    emailAddress: filter,
    mainEtps: filter,
    formations: filter,
    occupations: filter,
    institutions: filter,
    biography: filter,
  })

  const data = await api
    .get('researcher', {
      searchParams,
    })
    .json()

  return getResearchersSchema.parse(data)
}
