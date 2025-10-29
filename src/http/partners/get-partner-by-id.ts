import { api } from '@http/api-client'

interface IGetPartnerByIdResponse {
  id: string
  name: string
  logoUrl: string | null
  websiteUrl: string | null
  description: string | null
  category: string | null
  since: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export async function getPartnerById(
  id: string
): Promise<IGetPartnerByIdResponse> {
  return await api.get(`partner/${id}`).json()
}
