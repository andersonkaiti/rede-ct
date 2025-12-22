import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

export const getUserSchema = z.object({
  name: z.string(),
  id: z.string(),
  avatarUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  emailAddress: z.string(),
  orcid: z.string().nullable(),
  phone: z.string().nullable(),
  lattesUrl: z.string().nullable(),
  role: z.enum(['ADMIN', 'USER']),
})

export async function getUser(id: string) {
  try {
    const data = await api.get(`user/${id}`).json()

    return getUserSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      return notFound()
    }

    throw error
  }
}
