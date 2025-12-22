import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

export const getResearcherByIdSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  registrationNumber: z.string(),
  mainEtps: z.string().nullable(),
  formations: z.string().nullable(),
  degrees: z.array(
    z.enum(['DOCTOR', 'MASTER', 'BACHELOR', 'TECHNICAL', 'POSTGRADUATE']),
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

export async function getResearcherById(id: string) {
  try {
    const data = await api.get(`researcher/${id}`).json()

    return getResearcherByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
