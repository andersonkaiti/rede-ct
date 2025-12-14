import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IRegisterCertificationRequest {
  userId: string
  title: string
  description: string
  certification: File
}

export async function createCertification({
  userId,
  ...data
}: IRegisterCertificationRequest): Promise<void> {
  const formData = parseFormData(data)

  await api.post(`certification/${userId}`, {
    body: formData,
  })
}
