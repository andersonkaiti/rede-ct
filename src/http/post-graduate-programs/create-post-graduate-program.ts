import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface ICreatePostGraduateProgramRequest {
  title: string
  description?: string
  startDate: Date
  endDate: Date
  contact: string
  registrationLink?: string
  image: File
}

export async function createPostGraduateProgram(
  data: ICreatePostGraduateProgramRequest,
) {
  const formData = parseFormData(data)

  await api.post('post-graduate-programs', {
    body: formData,
  })
}
