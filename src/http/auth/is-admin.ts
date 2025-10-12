import { api } from '@http/api-client'

type IsAdminResponse = {
  success: boolean
  message?: string
}

export async function isAdmin() {
  try {
    const result: IsAdminResponse = await api.get('auth/admin').json()

    return !!result.success
  } catch {
    return false
  }
}
