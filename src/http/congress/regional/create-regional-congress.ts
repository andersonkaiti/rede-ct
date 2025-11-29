import { api } from '@http/api-client'

export interface ICreateRegionalCongressRequest {
  title: string
  edition: number
  startDate: Date
  endDate: Date
  description?: string
  location?: string
  congressLink?: string
  noticeUrl?: string
  scheduleUrl?: string
  programUrl?: string
  adminReportUrl?: string
  proceedingsUrl?: string
}

export async function createRegionalCongress(
  data: ICreateRegionalCongressRequest,
) {
  await api.post('regional-congress', {
    json: data,
  })
}
