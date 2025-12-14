import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IUpdatePendencyRequest {
  id: string
  title: string
  description: string
  status: string
  dueDate?: Date
  document?: File | null
}

export async function updatePendency({
  id,
  ...data
}: IUpdatePendencyRequest): Promise<void> {
  const formData = parseFormData(data)

  await api
    .put(`pendency/${id}`, {
      body: formData,
    })
    .json()
}
