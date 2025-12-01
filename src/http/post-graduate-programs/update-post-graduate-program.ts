import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IUpdatePostGraduateProgramRequest {
  id: string
  title?: string
  description?: string
  startDate?: Date
  endDate?: Date
  contact?: string
  registrationLink?: string
  image?: File
}

export async function updatePostGraduateProgram({
  id,
  ...data
}: IUpdatePostGraduateProgramRequest) {
  const formData = parseFormData(data)

  await api.put(`post-graduate-programs/${id}`, {
    body: formData,
  })
}
