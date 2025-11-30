import { api } from '@http/api-client'
import z from 'zod'

const getCourseByIdSchema = z
  .object({
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
    scheduledAt: z.string(),
    location: z.string(),
    registrationLink: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
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
  .nullable()

export async function getCourseById(id: string) {
  const data = await api.get(`courses/${id}`).json()

  return getCourseByIdSchema.parse(data)
}
