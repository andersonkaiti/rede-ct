'use server'

import { signUp } from '@http/auth/sign-up'
import { HTTPError } from 'ky'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const PASSWORD_MIN_LENGTH = 8

const signUpSchema = z
  .object({
    name: z.string('Nome é obrigatório.').min(1, 'Nome é obrigatório.'),
    email: z.email('E-mail inválido.').min(1, 'E-mail é obrigatório.'),
    password: z
      .string('A senha é obrigatória.')
      .min(
        PASSWORD_MIN_LENGTH,
        `A senha deve ter pelo menos ${PASSWORD_MIN_LENGTH} caracteres.`
      ),
    confirmPassword: z
      .string('A senha é obrigatória.')
      .min(
        PASSWORD_MIN_LENGTH,
        `A senha deve ter pelo menos ${PASSWORD_MIN_LENGTH} caracteres.`
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword'],
  })

export interface IActionState {
  success: boolean
  errors: z.inferFlattenedErrors<typeof signUpSchema>['fieldErrors'] | null
  payload: FormData | null
  message: string | null
}

export async function signUpAction(
  _: unknown,
  formData: FormData
): Promise<IActionState> {
  try {
    const { success, data, error } = signUpSchema.safeParse(
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

    await signUp(data)
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
      message: 'Ocorreu um erro inesperado. Tente novamente.',
    }
  }

  redirect('/sign-in')
}
