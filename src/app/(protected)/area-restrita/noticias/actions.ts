'use server'

import 'server-only'

import { getAuthenticatedUser } from '@http/auth/get-user'
import { createNews } from '@http/news/create-news'
import { updateNews } from '@http/news/update-news'
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
}

export async function registerNewsAction(
  _: unknown,
  formData: FormData
): Promise<IActionState> {
  try {
    const { success, error, data } = newsSchema.safeParse(
      Object.fromEntries(formData)
    )

    if (!success) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        payload: formData,
      }
    }

    await createNews(data)
  } catch {
    return {
      success: false,
      errors: null,
      payload: formData,
    }
  }

  return {
    success: true,
    errors: null,
    payload: null,
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
    }
  }

  return {
    success: true,
    errors: null,
    payload: null,
  }
}
