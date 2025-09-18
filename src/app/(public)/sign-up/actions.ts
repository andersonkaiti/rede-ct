'use server'

import { signUp } from '@http/auth/sign-up'
import { HTTPError } from 'ky'
import { redirect } from 'next/navigation'
import type { SignUpInput } from './_components/use-sign-up.hook'

export type SignUpActionResult =
  | { success: true }
  | { success: false; message: string }

export async function signUpAction(
  values: SignUpInput
): Promise<SignUpActionResult> {
  try {
    await signUp(values)
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message: errorBody?.message ?? 'Falha ao criar conta.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  redirect('/sign-in')
}
