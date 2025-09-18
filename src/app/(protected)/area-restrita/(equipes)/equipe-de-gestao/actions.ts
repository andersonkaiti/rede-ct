'use server'

import { createManagementTeam } from '@http/teams/create-management-team'
import { updateManagementTeam } from '@http/teams/update-management-team'
import { HTTPError } from 'ky'
import type { CreateManagementTeamInput } from './cadastrar/use-register-team.hook'
import type { UpdateManagementTeamInput } from './editar/[id]/use-update-team.hook'

export type ManagementTeamActionResult =
  | { success: true }
  | { success: false; message: string }

const TEAM_TYPE = 'equipe-de-gestao'

export async function createManagementTeamAction(
  team: CreateManagementTeamInput
): Promise<ManagementTeamActionResult> {
  try {
    await createManagementTeam({
      type: TEAM_TYPE,
      ...team,
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message: errorBody?.message ?? 'Falha ao cadastrar equipe de gestão.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return { success: true }
}

export async function updateManagementTeamAction({
  id,
  ...team
}: UpdateManagementTeamInput & {
  id: string
}): Promise<ManagementTeamActionResult> {
  try {
    await updateManagementTeam({
      id,
      name: team.name,
      members: team.members.map(({ id: memberId = '', ...member }) => ({
        ...(memberId && { id: memberId }),
        ...member,
      })),
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message: errorBody?.message ?? 'Falha ao atualizar equipe de gestão.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return { success: true }
}
