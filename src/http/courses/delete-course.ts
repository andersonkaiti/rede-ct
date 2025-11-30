import { api } from '@http/api-client'

export async function deleteCourseById(id: string) {
  await api.delete(`courses/${id}`)
}
