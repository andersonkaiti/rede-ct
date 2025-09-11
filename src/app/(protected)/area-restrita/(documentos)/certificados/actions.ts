'use server'

import { deleteCertificationById } from '@http/documents/certifications/delete-certification'
import { registerCertification } from '@http/documents/certifications/register-certification'
import { updateCertification } from '@http/documents/certifications/update-certification'
import { HTTPError } from 'ky'
import { revalidatePath } from 'next/cache'
import z from 'zod'

const registerCertificationSchema = z.object({
  userId: z.uuid('id do usuário inválido'),
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  certification: z
    .any()
    .refine(
      (file) => file instanceof File && file.size > 0,
      'Arquivo do certificado é obrigatório'
    ),
})

export interface IRegisterActionState {
  success: boolean
  errors:
    | z.inferFlattenedErrors<typeof registerCertificationSchema>['fieldErrors']
    | null
  payload: FormData | null
  message: string | null
}

export async function registerCertificationAction(
  _: unknown,
  formData: FormData
): Promise<IRegisterActionState> {
  const { success, data, error } = registerCertificationSchema.safeParse(
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
    await registerCertification(data)

    revalidatePath('/area-restrita/certificados')
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

const updateCertificationSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1, 'Título é obrigatório.'),
  description: z.string().min(1, 'Descrição é obrigatória.'),
  certification: z
    .any()
    .refine(
      (file) => file.size === 0 || (file instanceof File && file.size > 0),
      'Arquivo do certificado é inválido'
    )
    .optional(),
})

export interface IUpdateActionState {
  success: boolean
  errors:
    | z.inferFlattenedErrors<typeof updateCertificationSchema>['fieldErrors']
    | null
  payload: FormData | null
  message: string | null
}

export async function updateCertificationAction(
  certificationId: string,
  _: unknown,
  formData: FormData
): Promise<IUpdateActionState> {
  const { success, data, error } = updateCertificationSchema.safeParse({
    ...Object.fromEntries(formData),
    id: certificationId,
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
    await updateCertification(data)

    revalidatePath('/area-restrita/certificados')
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

export async function handleRemoveCertificationAction(
  id: string
): Promise<IDeleteActionState> {
  try {
    await deleteCertificationById(id)

    revalidatePath('/area-restrita/certificados')
  } catch {
    return {
      success: true,
    }
  }

  return {
    success: true,
  }
}
