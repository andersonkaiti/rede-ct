import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

const etpMemberUserSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  avatarUrl: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  emailAddress: z.string(),
  orcid: z.string().nullable(),
  phone: z.string().nullable(),
  lattesUrl: z.string().nullable(),
  role: z.enum(['ADMIN', 'USER']),
})

export const etpResearcherSchema = z.object({
  id: z.uuid(),
  registrationNumber: z.string(),
  mainEtps: z.string(),
  formations: z.string(),
  degrees: z.array(
    z.enum(['DOCTOR', 'MASTER', 'BACHELOR', 'TECHNICAL', 'POSTGRADUATE']),
  ),
  occupations: z.string(),
  seniority: z.enum(['SENIOR', 'RESEARCHER', 'JUNIOR', 'HONOR']),
  institutions: z.string(),
  biography: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  userId: z.uuid(),
  user: etpMemberUserSchema,
})

const etpRoleMemberSchema = z.object({
  id: z.uuid(),
  etpId: z.uuid(),
  researcherId: z.uuid(),
  researcher: etpResearcherSchema,
})

const etpMemberSchema = etpResearcherSchema

export const getETPByIdSchema = z.object({
  id: z.uuid(),
  code: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  notes: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  leader: etpRoleMemberSchema,
  deputyLeader: etpRoleMemberSchema,
  secretary: etpRoleMemberSchema,
  members: z.array(etpMemberSchema),
})

export async function getETPById(id: string) {
  try {
    const data = await api.get(`etp/${id}`).json()

    return getETPByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
