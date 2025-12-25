import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetETPsRequest {
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

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

export const etpSchema = z.object({
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

export const getEtpsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  etps: z.array(etpSchema),
})

export async function getEtps({ filter, ...params }: IGetETPsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    code: filter,
    title: filter,
    description: filter,
    notes: filter,
    userId: filter,
  })

  const data = await api
    .get('etp', {
      searchParams,
    })
    .json()

  return getEtpsSchema.parse(data)
}
