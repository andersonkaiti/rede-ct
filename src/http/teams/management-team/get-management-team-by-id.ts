import { api } from '@http/api-client'
import z from 'zod'

export const managementTeamByIdSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  members: z.array(
    z.object({
      id: z.string(),
      role: z.string(),
      description: z.string().nullable(),
      order: z.number(),
      createdAt: z.string(),
      updatedAt: z.string(),
      teamId: z.string(),
      userId: z.string(),
      user: z.object({
        id: z.string(),
        name: z.string(),
        role: z.enum(['ADMIN', 'USER']),
        createdAt: z.string(),
        updatedAt: z.string(),
        avatarUrl: z.url().nullable(),
        emailAddress: z.email(),
        orcid: z.string().nullable(),
        phone: z.string().nullable(),
        lattesUrl: z.url().nullable(),
      }),
    }),
  ),
})

export async function getManagementTeamById(id: string) {
  const data = await api.get(`management-team/${id}`).json()

  return managementTeamByIdSchema.parse(data)
}
