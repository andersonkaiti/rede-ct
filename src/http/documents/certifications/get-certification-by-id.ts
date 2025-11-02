import { api } from '@http/api-client'
import z from 'zod'

const getCertificationByIdSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  title: z.string(),
  description: z.string(),
  certificationUrl: z.string(),
  userId: z.string(),
})

export async function getCertificationById(id: string) {
  const data = await api.get(`certification/${id}`).json()

  return getCertificationByIdSchema.parse(data)
}
