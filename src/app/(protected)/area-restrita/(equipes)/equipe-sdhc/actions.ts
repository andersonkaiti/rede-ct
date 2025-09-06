'use server'

import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { revalidatePath } from 'next/cache'
import { ZodError, z } from 'zod'

const sdhcTeamMemberSchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  role: z.string().trim().min(1, 'Cargo é obrigatório'),
  description: z.string().trim().min(1, 'Descrição é obrigatória'),
})

export interface IActionState {
  success: boolean
  errors:
    | z.inferFlattenedErrors<typeof sdhcTeamMemberSchema>['fieldErrors']
    | null
  payload: FormData | null
  message: string | null
}

const TEAM_TYPE = 'equipe-sdhc'
const TEAM_NAME = 'Equipe SDHC'

export async function createSDHCTeamMemberAction(
  teamId: string,
  _: unknown,
  formData: FormData
): Promise<IActionState> {
  try {
    const { success, data, error } = sdhcTeamMemberSchema.safeParse(
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

    const teamAlreadyExists = !!teamId

    if (!teamAlreadyExists) {
      await api.post('team', {
        json: {
          type: TEAM_TYPE,
          name: TEAM_NAME,
          members: [
            {
              role: data.role,
              user: {
                id: data.userId,
              },
              description: data.description,
            },
          ],
        },
      })

      revalidatePath(`/area-restrita/${TEAM_TYPE}`)

      return {
        success: true,
        errors: null,
        payload: null,
        message: null,
      }
    }

    await api.post(`team/${teamId}/member`, {
      json: {
        teamId,
        member: data,
      },
    })

    revalidatePath(`/area-restrita/${TEAM_TYPE}`)

    return {
      success: true,
      errors: null,
      payload: null,
      message: null,
    }
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

    if (err instanceof ZodError) {
      return {
        success: false,
        errors: err.flatten().fieldErrors,
        payload: formData,
        message: null,
      }
    }

    return {
      success: false,
      errors: null,
      payload: formData,
      message: 'Aconteceu um erro inesperado.',
    }
  }
}

interface IUpdateSDHCTeamMemberProps {
  member: {
    id: string
  }
}

export async function updateSDHCTeamMemberAction(
  props: IUpdateSDHCTeamMemberProps,
  _: unknown,
  formData: FormData
): Promise<IActionState> {
  try {
    const { success, data, error } = sdhcTeamMemberSchema.safeParse(
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

    await api.put(`team/member/${props.member.id}`, {
      json: {
        ...data,
        id: props.member.id,
      },
    })

    revalidatePath(`/area-restrita/${TEAM_TYPE}`)

    return {
      success: true,
      errors: null,
      payload: null,
      message: null,
    }
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
}
