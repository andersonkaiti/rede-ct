'use server'

import { updateUser } from '@http/auth/update-user'
import { HTTPError } from 'ky'
import { z } from 'zod'

const MAX_AVATAR_SIZE_MB = 2
const KILOBYTE = 1024
const MEGABYTE = KILOBYTE * KILOBYTE
const MAX_AVATAR_SIZE_BYTES = MAX_AVATAR_SIZE_MB * MEGABYTE

const ORCID_REGEX = /^\d{4}-\d{4}-\d{4}-\d{4}$/

const NO_NUMBER_REGEX = /^[^0-9]*$/
const PHONE_REGEX = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/

const userSchema = z.object({
  name: z.string('Nome é obrigatório.').min(1, 'Nome é obrigatório.'),
  lattesUrl: z.url('Digite uma URL válida.').optional(),
  orcid: z
    .string()
    .transform((val) => val.trim())
    .refine((val) => NO_NUMBER_REGEX.test(val) || ORCID_REGEX.test(val), {
      message: 'ORCID inválido. Deve estar no formato 0000-0000-0000-0000',
    }),
  phone: z
    .string()
    .refine((val) => NO_NUMBER_REGEX.test(val) || PHONE_REGEX.test(val), {
      message: 'Telefone inválido. Deve estar no formato (99) 99999-9999',
    }),
  avatarImage: z
    .any()
    .optional()
    .refine(
      (value) => {
        if (value instanceof File) {
          return value.size <= MAX_AVATAR_SIZE_BYTES
        }

        if (typeof value === 'string') {
          return true
        }

        return false
      },
      { message: `A imagem deve ter no máximo ${MAX_AVATAR_SIZE_MB}MB` }
    ),
})

export interface IActionState {
  success: boolean
  errors: z.inferFlattenedErrors<typeof userSchema>['fieldErrors'] | null
  payload: FormData | null
  message: string | null
}

export async function updateUserAction(
  _: unknown,
  formData: FormData
): Promise<IActionState> {
  const { success, data, error } = userSchema.safeParse(
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
    await updateUser(data)
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

  return {
    success: true,
    errors: null,
    payload: formData,
    message: null,
  }
}
