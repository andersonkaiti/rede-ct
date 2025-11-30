import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface ICreateCourseRequest {
  title: string
  coordinatorId: string
  email: string
  location: string
  scheduledAt: Date
  registrationLink?: string
  description?: string
  image: File
  instructorIds: string[]
}

export async function createCourse(data: ICreateCourseRequest) {
  const course = parseFormData(data)

  await api.post('courses', {
    body: course,
  })
}
