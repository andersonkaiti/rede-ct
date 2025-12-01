import { api } from '@http/api-client'

export async function deletePostGraduateProgramById(id: string) {
  await api.delete(`post-graduate-programs/${id}`)
}
