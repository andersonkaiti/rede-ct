'use server'

import { deleteCertificationById } from '@http/documents/certifications/delete-certification'
import { registerCertification } from '@http/documents/certifications/register-certification'
import { updateCertification } from '@http/documents/certifications/update-certification'
import { HTTPError } from 'ky'
import { revalidatePath } from 'next/cache'
import type { RegisterCertificationInput } from './cadastrados/_components/create-certification/use-register-certification'
import type { UpdateCertificationInput } from './cadastrados/_components/update-certification/use-update-certification'

export type RegisterCertificationActionResult =
  | { success: true }
  | { success: false; message: string }

export async function registerCertificationAction(
  values: RegisterCertificationInput
): Promise<RegisterCertificationActionResult> {
  try {
    await registerCertification(values)

    revalidatePath('/area-restrita/certificados')
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message: errorBody?.message ?? 'Falha ao cadastrar certificado.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return { success: true }
}

export type UpdateCertificationActionResult =
  | { success: true }
  | { success: false; message: string }

export async function updateCertificationAction(
  values: UpdateCertificationInput
): Promise<UpdateCertificationActionResult> {
  try {
    await updateCertification(values)

    revalidatePath('/area-restrita/certificados')
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message: errorBody?.message ?? 'Falha ao atualizar certificado.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return { success: true }
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
