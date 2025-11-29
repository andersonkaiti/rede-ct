import { api } from '@http/api-client'

export interface IUpdateRegionalCongressRequest {
  id: string
  title?: string
  edition?: number
  startDate?: Date
  endDate?: Date
  description?: string
  location?: string
  congressLink?: string
  noticeUrl?: string
  scheduleUrl?: string
  programUrl?: string
  adminReportUrl?: string
  proceedingsUrl?: string
}

export async function updateRegionalCongress({
  id,
  ...data
}: IUpdateRegionalCongressRequest) {
  await api.put(`regional-congress/${id}`, {
    json: data,
  })
}
