'use server'

import { signIn } from '@http/auth/sign-in'
import { HTTPError } from 'ky'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const PASSWORD_MIN_LENGTH = 8

const signInSchema = z.object({
  email: z.email('E-mail inválido.').min(1, 'E-mail é obrigatório.'),
  password: z
    .string('A senha é obrigatória.')
    .min(
      PASSWORD_MIN_LENGTH,
      `A senha deve ter pelo menos ${PASSWORD_MIN_LENGTH} caracteres.`
    ),
})

export interface IActionState {
  success: boolean
  errors: z.inferFlattenedErrors<typeof signInSchema>['fieldErrors'] | null
  payload: FormData | null
  message: string | null
}

export async function signInAction(
  _: unknown,
  formData: FormData
): Promise<IActionState> {
  const { success, data, error } = signInSchema.safeParse(
    Object.fromEntries(formData)
  )

  if (!success) {
    return {
      success: false,
      errors: error.flatten().fieldErrors,
      payload: formData,
      message: null,
    }
  }

  try {
    const { token } = await signIn(data)

    const cookieStorage = await cookies()

    cookieStorage.set('token', token, {
      path: '/',
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        errors: null,
        payload: formData,
        message: errorBody.message,
      }
    }

    return {
      success: false,
      errors: null,
      payload: formData,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  redirect('/area-restrita')
}
