import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IUpdateResearchGroupRequest {
  id: string
  name?: string
  acronym?: string
  description?: string
  url?: string
  foundedAt?: Date
  scope?: string
  email?: string
  leaderId?: string
  deputyLeaderId?: string
  logo?: File
}

export async function updateResearchGroup({
  id,
  ...data
}: IUpdateResearchGroupRequest) {
  const formData = parseFormData(data)

  await api.put(`research-groups/${id}`, {
    body: formData,
  })
}
