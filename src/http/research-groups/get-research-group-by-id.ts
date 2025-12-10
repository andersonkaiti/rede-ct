import { api } from '@http/api-client'
import z from 'zod'

const getResearchGroupByIdSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    acronym: z.string().nullable(),
    description: z.string().nullable(),
    url: z.string().nullable(),
    logoUrl: z.string().nullable(),
    foundedAt: z.string(),
    scope: z.string().nullable(),
    email: z.string().nullable(),
    leaderId: z.string(),
    deputyLeaderId: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    leader: z.object({
      id: z.string(),
      name: z.string(),
      emailAddress: z.email(),
      avatarUrl: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
      orcid: z.string().nullable(),
      phone: z.string().nullable(),
      lattesUrl: z.string().nullable(),
      role: z.enum(['USER', 'ADMIN']),
    }),
    deputyLeader: z.object({
      id: z.string(),
      name: z.string(),
      emailAddress: z.email(),
      avatarUrl: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
      orcid: z.string().nullable(),
      phone: z.string().nullable(),
      lattesUrl: z.string().nullable(),
      role: z.enum(['USER', 'ADMIN']),
    }),
  })
  .nullable()

export async function getResearchGroupById(id: string) {
  const data = await api.get(`research-groups/${id}`).json()

  return getResearchGroupByIdSchema.parse(data)
}
