import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface IUpdatePartnerRequest {
  id: string
  name?: string
  logo?: File
  websiteUrl?: string
  description?: string
  category?: string
  since?: Date | string
  isActive?: boolean
}

export async function updatePartner({ id, ...data }: IUpdatePartnerRequest) {
  const formData = parseFormData(data)

  await api.put(`partner/${id}`, {
    body: formData,
  })
}
