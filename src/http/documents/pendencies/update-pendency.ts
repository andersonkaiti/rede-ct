import { api } from '@http/api-client'

interface IUpdatePendencyRequest {
  id: string
  title: string
  description: string
  status: string
  dueDate?: string
  document?: File | null
}

export async function updatePendency({
  id,
  title,
  description,
  status,
  dueDate,
  document,
}: IUpdatePendencyRequest): Promise<void> {
  const formData = new FormData()

  formData.append('title', title)
  formData.append('description', description)
  formData.append('status', status)

  if (dueDate) {
    formData.append('dueDate', dueDate)
  }

  if (document) {
    formData.append('document', document)
  }

  await api
    .put(`pendency/${id}`, {
      body: formData,
    })
    .json()
}
