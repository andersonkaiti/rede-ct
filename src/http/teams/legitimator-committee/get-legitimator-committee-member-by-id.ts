import { api } from '@http/api-client'
import z from 'zod'

export const getLegitimatorCommitteeMemberByIdSchema = z.object({
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

export async function getLegitimatorCommitteeMemberById(id: string) {
  const data = await api.get(`legitimator-committee-member/${id}`).json()

  return getLegitimatorCommitteeMemberByIdSchema.parse(data)
}
