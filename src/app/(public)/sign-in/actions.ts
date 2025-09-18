'use server'

import { signIn } from '@http/auth/sign-in'
import { HTTPError } from 'ky'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { SignInInput } from './_components/use-sign-in.hook'

export type SignInActionResult =
  | { success: true }
  | { success: false; message: string }

export async function signInAction(
  values: SignInInput
): Promise<SignInActionResult> {
  try {
    const { token } = await signIn(values)

    const cookieStorage = await cookies()

    cookieStorage.set('token', token, {
      path: '/',
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message: errorBody?.message ?? 'Falha ao entrar.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  redirect('/area-restrita')
}
