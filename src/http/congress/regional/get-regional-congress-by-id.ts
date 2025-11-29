import { api } from '@http/api-client'
import z from 'zod'

export const getRegionalCongressByIdSchema = z.object({
  id: z.string(),
  title: z.string(),
  edition: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string().nullable(),
  location: z.string().nullable(),
  congressLink: z.string().nullable(),
  noticeUrl: z.string().nullable(),
  scheduleUrl: z.string().nullable(),
  programUrl: z.string().nullable(),
  adminReportUrl: z.string().nullable(),
  proceedingsUrl: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  regionalCongressPartners: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      logoUrl: z.string().nullable(),
      congressId: z.string(),
    }),
  ),
  regionalCongressGalleryItems: z.array(
    z.object({
      id: z.string(),
      imageUrl: z.string(),
      caption: z.string().nullable(),
      congressId: z.string(),
    }),
  ),
})

export async function getRegionalCongressById(id: string) {
  const data = await api.get(`regional-congress/${id}`).json()

  return getRegionalCongressByIdSchema.parse(data)
}
