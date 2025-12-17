import { api } from '@http/api-client'
import z from 'zod'

export const isAdminSchemaResponse = z.object({
  success: z.boolean().optional(),
  message: z.string().optional(),
})

export async function isAdmin() {
  try {
    const result = await api.get('auth/admin').json()

    const isAdminResult = isAdminSchemaResponse.parse(result)

    return !!isAdminResult.success
  } catch {
    return false
  }
}
