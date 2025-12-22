import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

const getCourseByIdSchema = z.object({
  id: z.string(),
  title: z.string(),
  imageUrl: z.string().nullable(),
  coordinator: z.object({
    id: z.string(),
    name: z.string(),
    emailAddress: z.email(),
    avatarUrl: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
    orcid: z.string().nullable(),
    phone: z.string().nullable(),
    lattesUrl: z.string().nullable(),
    role: z.enum(['USER', 'ADMIN']),
  }),
  email: z.string(),
  scheduledAt: z.coerce.date(),
  location: z.string(),
  registrationLink: z.string().nullable(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  instructors: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      avatarUrl: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
      emailAddress: z.email(),
      orcid: z.string().nullable(),
      phone: z.string().nullable(),
      lattesUrl: z.string().nullable(),
      role: z.enum(['USER', 'ADMIN']),
    }),
  ),
})

export async function getCourseById(id: string) {
  try {
    const data = await api.get(`courses/${id}`).json()

    return getCourseByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
