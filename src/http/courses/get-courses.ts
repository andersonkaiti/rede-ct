import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetCoursesRequest {
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

const getCoursesSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  courses: z.array(
    z.object({
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
      instructors: z
        .array(
          z.object({
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
        )
        .optional(),
    }),
  ),
})

export async function getCourses({ filter, ...params }: IGetCoursesRequest) {
  const searchParams = parseSearchParams({
    ...params,
    title: filter,
    description: filter,
    coordinator: filter,
  })

  const data = await api
    .get('courses', {
      searchParams,
    })
    .json()

  return getCoursesSchema.parse(data)
}
