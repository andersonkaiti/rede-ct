import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

export const getInternationalScientificCongressByIdSchema = z.object({
  id: z.string(),
  title: z.string(),
  edition: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  description: z.string().nullable().optional(),
  location: z.string().nullable().optional(),
  websiteUrl: z.string().nullable().optional(),
  congressLink: z.string().nullable().optional(),
  noticeUrl: z.string().nullable().optional(),
  scheduleUrl: z.string().nullable().optional(),
  programUrl: z.string().nullable().optional(),
  adminReportUrl: z.string().nullable().optional(),
  proceedingsUrl: z.string().nullable().optional(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  galleries: z.array(
    z.object({
      id: z.string(),
      congressId: z.string(),
      caption: z.string().nullable().optional(),
      imageUrl: z.string(),
    }),
  ),
  partners: z.array(
    z.object({
      id: z.string(),
      congressId: z.string(),
      name: z.string(),
      logoUrl: z.string(),
    }),
  ),
})

export async function getInternationalScientificCongressById(id: string) {
  try {
    const data = await api.get(`international-scientific-congress/${id}`).json()

    return getInternationalScientificCongressByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
