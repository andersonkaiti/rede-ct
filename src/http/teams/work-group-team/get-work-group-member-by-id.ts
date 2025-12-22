import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

const workGroupTeamMemberSchema = z.object({
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

export async function getWorkGroupTeamMemberById(id: string) {
  try {
    const data = await api.get(`work-group-team-member/${id}`).json()

    return workGroupTeamMemberSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
