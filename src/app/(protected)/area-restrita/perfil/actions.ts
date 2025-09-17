'use server'

import { updateUser } from '@http/auth/update-user'
import { HTTPError } from 'ky'

export type UpdateUserInput = {
  name?: string
  orcid?: string
  phone?: string
  lattesUrl?: string
  avatarImage?: File | null
}

export type UpdateUserActionResult =
  | { success: true }
  | { success: false; message: string }

export async function updateUserAction(
  values: UpdateUserInput
): Promise<UpdateUserActionResult> {
  try {
    await updateUser({
      ...values,
      avatarImage: values.avatarImage ?? undefined,
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message: errorBody?.message ?? 'Falha ao atualizar usuário.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return { success: true }
}
