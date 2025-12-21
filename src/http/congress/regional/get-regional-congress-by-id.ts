import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import z from 'zod'

export const getRegionalCongressByIdSchema = z.object({
  id: z.string(),
  title: z.string(),
  edition: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  description: z.string().nullable(),
  location: z.string().nullable(),
  congressLink: z.string().nullable(),
  noticeUrl: z.string().nullable(),
  scheduleUrl: z.string().nullable(),
  programUrl: z.string().nullable(),
  adminReportUrl: z.string().nullable(),
  proceedingsUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
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
  try {
    const data = await api.get(`regional-congress/${id}`).json()

    return getRegionalCongressByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      return null
    }
  }
}
