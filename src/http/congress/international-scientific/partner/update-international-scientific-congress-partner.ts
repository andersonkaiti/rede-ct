import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface IUpdateInternationalScientificCongressPartnerRequest {
  id: string
  name?: string
  logo?: File
}

export async function updateInternationalScientificCongressPartner({
  id,
  ...data
}: IUpdateInternationalScientificCongressPartnerRequest) {
  const formData = parseFormData(data)

  await api.put(`international-scientific-congress/partner/${id}`, {
    body: formData,
  })
}
