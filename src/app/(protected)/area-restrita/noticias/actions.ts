'use server'

import { getAuthenticatedUser } from '@http/auth/get-user'
import { createNews } from '@http/news/create-news'
import { updateNews } from '@http/news/update-news'
import { HTTPError } from 'ky'
import type { CreateNewsInput } from './cadastrar/use-create-news.hook'
import type { UpdateNewsInput } from './editar/[id]/use-update-news.hook'

export type CreateNewsActionResult =
  | { success: true }
  | { success: false; message: string }

export async function registerNewsAction(
  values: CreateNewsInput
): Promise<CreateNewsActionResult> {
  try {
    await createNews(values)
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message: errorBody?.message ?? 'Falha ao cadastrar notícia.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return { success: true }
}

export async function updateNewsAction(
  values: UpdateNewsInput
): Promise<CreateNewsActionResult> {
  try {
    const user = await getAuthenticatedUser()

    if (!user) {
      throw new Error('Não autorizado!')
    }

    await updateNews(values)
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message: errorBody?.message ?? 'Falha ao atualizar notícia.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return { success: true }
}
