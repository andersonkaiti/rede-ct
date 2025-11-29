import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface ICreateRegionalCongressPartnerRequest {
  name: string
  logo: File
}

export async function createRegionalCongressPartner(
  id: string,
  data: ICreateRegionalCongressPartnerRequest,
) {
  const formData = parseFormData(data)

  await api.post(`regional-congress/${id}/partner`, {
    body: formData,
  })
}
