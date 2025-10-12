import { api } from '@http/api-client'

interface IRegisterPendencyRequest {
  userId: string
  title: string
  description: string
  dueDate?: string
  document: File
}

export async function registerPendency({
  document,
  description,
  title,
  userId,
  dueDate,
}: IRegisterPendencyRequest): Promise<void> {
  const formData = new FormData()

  formData.append('title', title)
  formData.append('description', description)

  if (dueDate) {
    formData.append('dueDate', dueDate)
  }

  formData.append('document', document)

  await api
    .post(`pendency/${userId}`, {
      body: formData,
    })
    .json()
}
