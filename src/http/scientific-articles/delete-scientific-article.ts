import { api } from '@http/api-client'

export async function deleteScientificArticleById(id: string) {
  await api.delete(`scientific-articles/${id}`)
}
