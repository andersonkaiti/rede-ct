import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import z from 'zod'

const getPostGraduateProgramByIdSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    imageUrl: z.string().nullable(),
    description: z.string().nullable(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    contact: z.string(),
    registrationLink: z.string().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
  .nullable()

export async function getPostGraduateProgramById(id: string) {
  try {
    const data = await api.get(`post-graduate-programs/${id}`).json()

    return getPostGraduateProgramByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      return null
    }
  }
}
