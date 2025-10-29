import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'

export interface IGetPartnersRequest {
  page?: string
  limit?: string
  category?: string
  search?: string
  isActive?: boolean
}

export interface IPartner {
  name: string
  id: string
  logoUrl: string | null
  websiteUrl: string | null
  description: string | null
  category: string | null
  since: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface IGetPartnersResponse {
  page: number
  totalPages: number
  offset: number
  limit: number
  partners: IPartner[]
}

export async function getPartners(
  params: IGetPartnersRequest
): Promise<IGetPartnersResponse> {
  const searchParams = parseSearchParams(params)

  return await api
    .get('partner', {
      searchParams,
    })
    .json()
}
