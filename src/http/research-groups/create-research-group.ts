import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface ICreateResearchGroupRequest {
  name: string
  acronym?: string
  description?: string
  url?: string
  foundedAt: Date
  scope?: string
  email?: string
  leaderId: string
  deputyLeaderId: string
  logo?: File
}

export async function createResearchGroup(data: ICreateResearchGroupRequest) {
  const formData = parseFormData(data)

  await api.post('research-groups', {
    body: formData,
  })
}
