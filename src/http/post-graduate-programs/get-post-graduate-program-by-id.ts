import { api } from '@http/api-client'
import z from 'zod'

const getPostGraduateProgramByIdSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    imageUrl: z.string().nullable(),
    description: z.string().nullable(),
    startDate: z.string(),
    endDate: z.string(),
    contact: z.string(),
    registrationLink: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
  .nullable()

export async function getPostGraduateProgramById(id: string) {
  const data = await api.get(`post-graduate-programs/${id}`).json()

  return getPostGraduateProgramByIdSchema.parse(data)
}
