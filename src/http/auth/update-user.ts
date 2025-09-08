import { api } from '@http/api-client'

interface IUpdateUserRequest {
  name?: string
  orcid?: string
  phone?: string
  // biome-ignore lint/suspicious/noExplicitAny: file
  avatarImage?: any
}

export async function updateUser(data: IUpdateUserRequest): Promise<void> {
  const formData = new FormData()

  if (data.name !== undefined) {
    formData.append('name', data.name)
  }

  if (data.orcid !== undefined) {
    formData.append('orcid', data.orcid)
  }

  if (data.phone !== undefined) {
    formData.append('phone', data.phone)
  }

  if (data.avatarImage !== undefined) {
    formData.append('avatarImage', data.avatarImage)
  }

  await api.put('user', {
    body: formData,
  })
}
