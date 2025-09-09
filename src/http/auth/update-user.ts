import { api } from '@http/api-client'

interface IUpdateUserRequest {
  name?: string
  orcid?: string
  phone?: string
  lattesUrl?: string
  avatarImage?: File
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

  if (data.lattesUrl !== undefined) {
    formData.append('lattesUrl', data.lattesUrl)
  }

  if (data.avatarImage !== undefined && data.avatarImage.size > 0) {
    formData.append('avatarImage', data.avatarImage)
  }

  await api.put('user', {
    body: formData,
  })
}
