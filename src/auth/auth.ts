import { api } from '@http/api-client'
import { cookies } from 'next/headers'
import z from 'zod'

export async function isAuthenticated() {
  return !!(await cookies()).get('token')?.value
}

const isAdminResponseSchema = z.object({
  success: z.boolean().optional(),
  message: z.string().optional(),
})

export async function isAdmin() {
  try {
    const data = await api.get('auth/admin').json()

    return !!isAdminResponseSchema.parse(data).success
  } catch {
    return false
  }
}
