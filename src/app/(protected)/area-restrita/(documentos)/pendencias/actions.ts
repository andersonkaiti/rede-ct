'use server'

import { deletePendencyById } from '@http/documents/pendencies/delete-pendency'
import { registerPendency } from '@http/documents/pendencies/register-pendency'
import { updatePendency } from '@http/documents/pendencies/update-pendency'
import { HTTPError } from 'ky'
import { revalidatePath } from 'next/cache'
import z from 'zod'

const registerPendencySchema = z.object({
  userId: z.uuid('id do usuário inválido'),
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  status: z.enum(['PENDING', 'PAID']).default('PENDING'),
  dueDate: z.string().optional(),
  document: z
    .any()
    .refine(
      (file) => file instanceof File && file.size > 0,
      'Documento é obrigatório'
    ),
})

export interface IRegisterActionState {
  success: boolean
  errors:
    | z.inferFlattenedErrors<typeof registerPendencySchema>['fieldErrors']
    | null
  payload: FormData | null
  message: string | null
}

export async function registerPendencyAction(
  _: unknown,
  formData: FormData
): Promise<IRegisterActionState> {
  const { success, data, error } = registerPendencySchema.safeParse(
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
    await registerPendency(data)

    revalidatePath('/area-restrita/pendencias')
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
    payload: null,
    message: null,
  }
}

const updatePendencySchema = z.object({
  id: z.uuid(),
  title: z.string().min(1, 'Título é obrigatório.'),
  description: z.string().min(1, 'Descrição é obrigatória.'),
  status: z.enum(['PENDING', 'PAID']).default('PENDING'),
  dueDate: z.string().optional(),
  document: z
    .any()
    .refine(
      (file) => file.size === 0 || (file instanceof File && file.size > 0),
      'Documento é inválido'
    )
    .optional(),
})

export interface IUpdateActionState {
  success: boolean
  errors:
    | z.inferFlattenedErrors<typeof updatePendencySchema>['fieldErrors']
    | null
  payload: FormData | null
  message: string | null
}

export async function updatePendencyAction(
  pendencyId: string,
  _: unknown,
  formData: FormData
): Promise<IUpdateActionState> {
  const { success, data, error } = updatePendencySchema.safeParse({
    ...Object.fromEntries(formData),
    id: pendencyId,
  })

  if (!success) {
    return {
      success: false,
      errors: error.flatten().fieldErrors,
      payload: formData,
      message: null,
    }
  }

  try {
    await updatePendency(data)

    revalidatePath('/area-restrita/pendencias')
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
    payload: null,
    message: null,
  }
}

export interface IDeleteActionState {
  success: boolean
}

export async function handleRemovePendencyAction(
  id: string
): Promise<IDeleteActionState> {
  try {
    await deletePendencyById(id)

    revalidatePath('/area-restrita/pendencias')
  } catch {
    return {
      success: true,
    }
  }

  return {
    success: true,
  }
}
