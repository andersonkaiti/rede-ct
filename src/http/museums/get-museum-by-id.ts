import { api } from '@http/api-client'
import z from 'zod'

const getMuseumByIdSchema = z.object({
  id: z.string(),
  logoUrl: z.string().nullable(),
  name: z.string(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  country: z.string().nullable(),
  description: z.string().nullable(),
  website: z.string().nullable(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  functioning: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export async function getMuseumById(id: string) {
  const data = await api.get(`museum/${id}`).json()

  return getMuseumByIdSchema.parse(data)
}
