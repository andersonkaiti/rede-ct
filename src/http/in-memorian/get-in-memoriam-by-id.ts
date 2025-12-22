import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

export const getInMemoriamByIdSchema = z.object({
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

export async function getInMemoriamById(id: string) {
  try {
    const data = await api.get(`in-memoriam/${id}`).json()

    return getInMemoriamByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
