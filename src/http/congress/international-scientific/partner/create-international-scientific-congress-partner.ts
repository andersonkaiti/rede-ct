import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface ICreateInternationalScientificCongressPartnerRequest {
  name: string
  logo: File
}

export async function createInternationalScientificCongressPartner(
  id: string,
  data: ICreateInternationalScientificCongressPartnerRequest,
) {
  const formData = parseFormData(data)

  await api.post(`international-scientific-congress/${id}/partner`, {
    body: formData,
  })
}
