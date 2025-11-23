import { api } from '@http/api-client'
import z from 'zod'

export const getInternationalScientificCongressByIdSchema = z.object({
  id: z.string(),
  title: z.string(),
  edition: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string().nullable().optional(),
  location: z.string().nullable().optional(),
  websiteUrl: z.string().nullable().optional(),
  congressLink: z.string().nullable().optional(),
  noticeUrl: z.string().nullable().optional(),
  scheduleUrl: z.string().nullable().optional(),
  programUrl: z.string().nullable().optional(),
  adminReportUrl: z.string().nullable().optional(),
  proceedingsUrl: z.string().nullable().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export async function getInternationalScientificCongressById(id: string) {
  const data = await api.get(`international-scientific-congress/${id}`).json()

  return getInternationalScientificCongressByIdSchema.parse(data)
}
