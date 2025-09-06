'use server'

import { createManagementTeam } from '@http/teams/create-management-team'
import { updateManagementTeam } from '@http/teams/update-management-team'
import { HTTPError } from 'ky'
import type { ITeamMember } from 'types/team'
import { z } from 'zod'

const managementTeamSchema = z.object({
  name: z.string().trim().min(1, 'O nome da equipe é obrigatório.').trim(),
  members: z
    .array(
      z.object({
        role: z.string().trim().min(1, 'Cargo é obrigatório.'),
        id: z.uuid().optional(),
        user: z.object({
          id: z.string(),
        }),
      })
    )
    .min(1, 'Membros são obrigatórios.'),
})

export interface IActionState {
  success: boolean
  errors:
    | z.inferFlattenedErrors<typeof managementTeamSchema>['fieldErrors']
    | null
  payload: FormData | null
  message: string | null
}

const TEAM_TYPE = 'equipe-de-gestao'

export async function createManagementTeamAction(
  members: ITeamMember[],
  _: unknown,
  formData: FormData
): Promise<IActionState> {
  try {
    const { success, data, error } = managementTeamSchema.safeParse({
      name: formData.get('name'),
      members,
    })

    if (!success) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        payload: formData,
        message: null,
      }
    }

    await createManagementTeam({
      type: TEAM_TYPE,
      ...data,
    })

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

interface IUpdatedManagementTeam {
  members: ITeamMember[]
  id: string
}

export async function updateManagementTeamAction(
  team: IUpdatedManagementTeam,
  _: unknown,
  formData: FormData
): Promise<IActionState> {
  try {
    const { success, data, error } = managementTeamSchema.safeParse({
      name: formData.get('name'),
      members: team.members,
    })

    if (!success) {
      return {
        success: false,
        errors: error?.flatten().fieldErrors,
        payload: formData,
        message: null,
      }
    }

    await updateManagementTeam({
      id: team.id,
      name: data.name,
      members: data.members.map(({ id, ...rest }) => ({
        id: id ?? '',
        ...rest,
      })),
    })

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
