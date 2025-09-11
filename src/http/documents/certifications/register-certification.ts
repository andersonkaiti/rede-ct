import { api } from '@http/api-client'

interface IRegisterCertificationRequest {
  userId: string
  title: string
  description: string
  certification: File
}

export async function registerCertification({
  certification,
  description,
  title,
  userId,
}: IRegisterCertificationRequest): Promise<void> {
  const formData = new FormData()

  formData.append('title', title)
  formData.append('description', description)
  formData.append('certification', certification)

  await api
    .post(`certification/${userId}`, {
      body: formData,
    })
    .json()
}
