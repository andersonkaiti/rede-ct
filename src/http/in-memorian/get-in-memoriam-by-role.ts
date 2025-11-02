import { api } from '@http/api-client'
import z from 'zod'

export const getInMemoriamByRoleSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    birthDate: z.string(),
    deathDate: z.string(),
    biography: z.string().nullable(),
    photoUrl: z.string().nullable(),
    role: z.enum(['RESEARCHER', 'LEADER']),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
)

export async function getInMemoriamByRole(role: string) {
  const data = await api.get(`in-memoriam/role/${role}`).json()

  return getInMemoriamByRoleSchema.parse(data)
}
