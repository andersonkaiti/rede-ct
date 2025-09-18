'use server'

import { deletePendencyById } from '@http/documents/pendencies/delete-pendency'
import { registerPendency } from '@http/documents/pendencies/register-pendency'
import { updatePendency } from '@http/documents/pendencies/update-pendency'
import { HTTPError } from 'ky'
import { revalidatePath } from 'next/cache'
import type { RegisterPendencyInput } from './cadastradas/_components/create-pendency/use-register-pendency'
import type { UpdatePendencyInput } from './cadastradas/_components/update-pendency/use-update-pendency'

export type RegisterPendencyActionResult =
  | { success: true }
  | { success: false; message: string }

export async function registerPendencyAction(
  values: RegisterPendencyInput
): Promise<RegisterPendencyActionResult> {
  try {
    await registerPendency(values)

    revalidatePath('/area-restrita/pendencias')
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message: errorBody?.message ?? 'Falha ao cadastrar pendência.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return { success: true }
}

export type UpdatePendencyActionResult =
  | { success: true }
  | { success: false; message: string }

export async function updatePendencyAction(
  values: UpdatePendencyInput
): Promise<UpdatePendencyActionResult> {
  try {
    await updatePendency({
      id: values.id,
      title: values.title,
      description: values.description,
      status: values.status ?? 'PENDING',
      dueDate: values.dueDate,
      document: values.document,
    })

    revalidatePath('/area-restrita/pendencias')
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message: errorBody?.message ?? 'Falha ao atualizar pendência.',
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
