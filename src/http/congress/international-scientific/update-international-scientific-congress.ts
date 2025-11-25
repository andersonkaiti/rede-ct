import { api } from '@http/api-client'

export interface IUpdateInternationalScientificCongressRequest {
  id: string
  title?: string
  edition?: number
  startDate?: Date
  endDate?: Date
  description?: string
  location?: string
  websiteUrl?: string
  congressLink?: string
  noticeUrl?: string
  scheduleUrl?: string
  programUrl?: string
  adminReportUrl?: string
  proceedingsUrl?: string
}

export async function updateInternationalScientificCongress({
  id,
  ...data
}: IUpdateInternationalScientificCongressRequest) {
  await api.put(`international-scientific-congress/${id}`, {
    json: data,
  })
}
