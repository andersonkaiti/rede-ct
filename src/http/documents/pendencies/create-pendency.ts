import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IRegisterPendencyRequest {
  userId: string
  title: string
  description: string
  dueDate?: Date
  document: File
}

export async function createPendency({
  userId,
  ...data
}: IRegisterPendencyRequest): Promise<void> {
  const formData = parseFormData(data)

  await api.post(`pendency/${userId}`, {
    body: formData,
  })
}
