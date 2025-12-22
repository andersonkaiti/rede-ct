import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

export const getRegisteredPendenciesSchema = z.object({
  title: z.string(),
  description: z.string().nullable(),
  userId: z.string(),
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  status: z.enum(['PENDING', 'PAID']),
  dueDate: z.string().nullable(),
  documentUrl: z.string(),
  user: z.object({
    name: z.string(),
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    emailAddress: z.string(),
    avatarUrl: z.string().nullable(),
    orcid: z.string().nullable(),
    phone: z.string().nullable(),
    lattesUrl: z.string().nullable(),
    role: z.enum(['ADMIN', 'USER']),
  }),
})

export async function getPendencyById(id: string) {
  try {
    const data = await api.get(`pendency/${id}`).json()

    return getRegisteredPendenciesSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
