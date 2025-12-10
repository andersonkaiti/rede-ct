import { api } from '@http/api-client'
import z from 'zod'

export const getLawByIdSchema = z.object({
  id: z.string(),
  title: z.string(),
  link: z.string(),
  country: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export async function getLawById(id: string) {
  const data = await api.get(`law/${id}`).json()

  return getLawByIdSchema.parse(data)
}
