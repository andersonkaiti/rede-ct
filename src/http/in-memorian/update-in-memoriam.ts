import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export type InMemoriamRole = 'RESEARCHER' | 'LEADER'
export type InMemoriamOrderBy = 'asc' | 'desc'

export interface IUpdateInMemoriamRequest {
  id: string
  birthDate: Date
  deathDate: Date
  name: string
  role: InMemoriamRole
  biography?: string
  photo?: File | null
}

export async function updateInMemoriam({
  id,
  ...data
}: IUpdateInMemoriamRequest) {
  const formData = parseFormData(data)

  return await api.put(`in-memoriam/${id}`, {
    body: formData,
  })
}
