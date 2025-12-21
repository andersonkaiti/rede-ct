import { api } from '@http/api-client'
import z from 'zod'

const referenceCenterTeamMemberSchema = z.object({
  id: z.string(),
  role: z.string(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
  user: z.object({
    id: z.string(),
    name: z.string(),
    avatarUrl: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
    emailAddress: z.string(),
    orcid: z.string().nullable(),
    phone: z.string().nullable(),
    lattesUrl: z.string().nullable(),
    role: z.enum(['ADMIN', 'USER']),
  }),
})

export async function getReferenceCenterTeamMemberById(id: string) {
  const data = await api.get(`reference-center-team-member/${id}`).json()

  return referenceCenterTeamMemberSchema.parse(data)
}
