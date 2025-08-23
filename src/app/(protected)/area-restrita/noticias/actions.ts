'use server'

import 'server-only'

import { api } from '@adapters/index'
import { currentUser } from '@clerk/nextjs/server'
import { BASE_URL } from '@config/index'
import type { INews } from 'types/news'
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
    .optional()
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
  payload: FormData
}

export async function registerNewsAction(_: unknown, formData: FormData) {
  const { success, error } = newsSchema.safeParse(Object.fromEntries(formData))

  if (!success) {
    return {
      success: false,
      errors: error.flatten().fieldErrors,
      payload: formData,
    } as IActionState
  }

  const user = await currentUser()

  const news = new FormData()

  news.append('title', formData.get('title') as string)
  news.append('content', formData.get('content') as string)
  news.append('author_id', user?.id || '')
  news.append('image', formData.get('image') as File)

  await api.post(`${BASE_URL}/news`, news, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return {
    success: true,
    errors: null,
  } as IActionState
}

export async function updateNewsAction(
  id: string,
  image_url: string | undefined,
  _: unknown,
  formData: FormData
) {
  const { success, error } = newsSchema.safeParse({
    ...Object.fromEntries(formData),
    image: image_url,
  })

  if (!success) {
    return {
      success: false,
      errors: error.flatten().fieldErrors,
      payload: formData,
    } as IActionState
  }

  const user = await currentUser()

  if (!user) {
    throw new Error('Não autorizado!')
  }

  const news = new FormData()

  news.append('title', formData.get('title') as string)
  news.append('content', formData.get('content') as string)
  news.append('image', formData.get('image') as File)
  news.append('author_id', user?.id || '')

  if (image_url) {
    news.append('image_url', image_url)
  }

  await api.put<INews>(`${BASE_URL}/news/${id}`, news)

  return {
    success: true,
    errors: null,
  } as IActionState
}
