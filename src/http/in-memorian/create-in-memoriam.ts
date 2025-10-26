import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface ICreateInMemoriamRequest {
  birthDate: Date
  deathDate: Date
  name: string
  role: 'RESEARCHER' | 'LEADER'
  biography?: string
  photo?: File
}

export async function createInMemoriam(data: ICreateInMemoriamRequest) {
  const formData = parseFormData(data)

  return await api.post('in-memoriam', {
    body: formData,
  })
}
