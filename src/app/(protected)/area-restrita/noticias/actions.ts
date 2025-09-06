'use server'

import { getAuthenticatedUser } from '@http/auth/get-user'
import { createNews } from '@http/news/create-news'
import { updateNews } from '@http/news/update-news'
import { HTTPError } from 'ky'
import { z } from 'zod'

const BYTES = 1024
const MEGABYTES = BYTES * BYTES
const MAX_FILE_SIZE_MB = 5
const TOTAL_SIZE = MAX_FILE_SIZE_MB * MEGABYTES

const newsSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  content: z.string().min(1, 'Texto é obrigatório'),
  image: z
    .any()
    .refine(
      (value) => {
        if (value instanceof File) {
          return value.size > 0
        }

        if (typeof value === 'string') {
          return value.length > 0
        }

        return false
      },
      { message: 'Imagem é obrigatória' }
    )
    .refine(
      (value) => {
        if (value instanceof File) {
          return value.size <= TOTAL_SIZE
        }

        if (typeof value === 'string') {
          return true
        }

        return false
      },
      { message: 'A imagem deve ter no máximo 5MB' }
    ),
})

export interface IActionState {
  success: boolean
  errors: z.inferFlattenedErrors<typeof newsSchema>['fieldErrors'] | null
  payload: FormData | null
  message: string | null
}

export async function registerNewsAction(
  _: unknown,
  formData: FormData
): Promise<IActionState> {
  const { success, error, data } = newsSchema.safeParse(
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
    await createNews(data)
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        errors: null,
        payload: formData,
        message: errorBody,
      }
    }

    return {
      success: false,
      errors: null,
      payload: formData,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return {
    success: true,
    errors: null,
    payload: null,
    message: null,
  }
}

export async function updateNewsAction(
  id: string,
  image_url: string | undefined,
  _: unknown,
  formData: FormData
): Promise<IActionState> {
  try {
    const { success, error, data } = newsSchema.safeParse({
      ...Object.fromEntries(formData),
      image: image_url,
    })

    if (!success) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        payload: formData,
        message: null,
      }
    }

    const user = await getAuthenticatedUser()

    if (!user) {
      throw new Error('Não autorizado!')
    }

    await updateNews({
      ...data,
      id,
    })
  } catch {
    return {
      success: false,
      errors: null,
      payload: formData,
      message: null,
    }
  }

  return {
    success: true,
    errors: null,
    payload: null,
    message: null,
  }
}
