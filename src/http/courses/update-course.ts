import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IUpdateCourseRequest {
  id: string
  title?: string
  coordinatorId?: string
  email?: string
  location?: string
  scheduledAt?: Date
  registrationLink?: string
  description?: string
  image?: File
  instructorIds?: string[]
}

export async function updateCourse({ id, ...data }: IUpdateCourseRequest) {
  const formData = parseFormData(data)

  await api.put(`courses/${id}`, {
    body: formData,
  })
}
