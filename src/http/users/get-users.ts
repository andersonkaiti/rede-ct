import { api } from '@http/api-client'
import z from 'zod'

export const getUsersSchema = z.array(
  z.object({
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
)

export async function getUsers() {
  const data = await api.get('user').json()

  return getUsersSchema.parse(data)
}
