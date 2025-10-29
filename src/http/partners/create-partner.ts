import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface ICreatePartnerRequest {
  name: string
  logo: File
  websiteUrl?: string
  description?: string
  category?: string
  since: Date | string
  isActive?: boolean
}

export async function createPartner(data: ICreatePartnerRequest) {
  const formData = parseFormData(data)

  return await api.post('partner', {
    body: formData,
  })
}
