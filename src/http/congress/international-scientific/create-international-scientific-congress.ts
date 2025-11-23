import { api } from '@http/api-client'

export interface ICreateInternationalScientificCongressRequest {
  title: string
  edition: number
  startDate: Date
  endDate: Date
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

export async function createInternationalScientificCongress(
  data: ICreateInternationalScientificCongressRequest,
) {
  await api.post('international-scientific-congress', {
    json: data,
  })
}
