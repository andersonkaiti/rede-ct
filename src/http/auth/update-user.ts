import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IUpdateUserRequest {
  name?: string
  orcid?: string
  phone?: string
  lattesUrl?: string
  avatarImage?: File
}

export async function updateUser(data: IUpdateUserRequest): Promise<void> {
  const formData = parseFormData(data)

  await api.put('user', {
    body: formData,
  })
}
