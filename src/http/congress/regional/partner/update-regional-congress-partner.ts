import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface IUpdateRegionalCongressPartnerRequest {
  name?: string
  logo?: File
}

export async function updateRegionalCongressPartner(
  id: string,
  data: IUpdateRegionalCongressPartnerRequest,
) {
  const formData = parseFormData(data)

  await api.put(`regional-congress/partner/${id}`, {
    body: formData,
  })
}
