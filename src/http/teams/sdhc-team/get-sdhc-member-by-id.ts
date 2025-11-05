import { api } from '@http/api-client'
import z from 'zod'

export const getSDHCTeamMemberByIdSchema = z.object({
  id: z.string(),
  role: z.string(),
  description: z.string().nullable(),
  order: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  userId: z.string(),
  user: z.object({
    role: z.enum(['ADMIN', 'USER']),
    name: z.string(),
    id: z.string(),
    avatarUrl: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
    emailAddress: z.string(),
    orcid: z.string().nullable(),
    phone: z.string().nullable(),
    lattesUrl: z.string().nullable(),
  }),
})

export async function getSDHCTeamMemberById(id: string) {
  const data = await api.get(`sdhc-team-member/${id}`).json()

  return getSDHCTeamMemberByIdSchema.parse(data)
}
