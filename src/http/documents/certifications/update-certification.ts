import { api } from '@http/api-client'

interface IUpdateCertificationRequest {
  id: string
  title: string
  description: string
  certification?: File | null
}

export async function updateCertification({
  id,
  title,
  description,
  certification,
}: IUpdateCertificationRequest): Promise<void> {
  const formData = new FormData()

  formData.append('title', title)
  formData.append('description', description)

  if (certification) {
    formData.append('certification', certification)
  }

  await api
    .put(`certification/${id}`, {
      body: formData,
    })
    .json()
}
