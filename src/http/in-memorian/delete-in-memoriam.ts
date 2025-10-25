import { api } from '@http/api-client'

export interface IDeleteInMemoriamRequest {
  id: string
}

export async function deleteInMemoriam({ id }: IDeleteInMemoriamRequest) {
  return await api.delete(`in-memoriaM/${id}`)
}
