'use server'

import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import type { CreateLegitimatorCommitteeTeamMemberInput } from './_components/create-member/use-create-member.hook'
import type { UpdateLegitimatorCommitteeTeamMemberInput } from './_components/update-member/use-update-member.hook'

export type LegitimatorCommitteeTeamMemberActionResult =
  | { success: true }
  | { success: false; message: string }

const TEAM_TYPE = 'comite-legitimador'
const TEAM_NAME = 'Comitê Legitimador'

export async function createLegitimatorCommitteeTeamMemberAction({
  teamId,
  ...member
}: CreateLegitimatorCommitteeTeamMemberInput & {
  teamId?: string
}): Promise<LegitimatorCommitteeTeamMemberActionResult> {
  try {
    const teamAlreadyExists = !!teamId

    if (!teamAlreadyExists) {
      await api.post('team', {
        json: {
          type: TEAM_TYPE,
          name: TEAM_NAME,
          members: [
            {
              role: member.role,
              user: {
                id: member.userId,
              },
              description: member.description,
            },
          ],
        },
      })

      return { success: true }
    }

    await api.post(`team/${teamId}/member`, {
      json: {
        teamId,
        member,
      },
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message:
          errorBody?.message ??
          'Falha ao cadastrar membro do comitê legitimador.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return { success: true }
}

export async function updateLegitimatorCommitteeTeamMemberAction(
  member: UpdateLegitimatorCommitteeTeamMemberInput & {
    id: string
  }
): Promise<LegitimatorCommitteeTeamMemberActionResult> {
  try {
    await api.put(`team/member/${member.id}`, {
      json: member,
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message:
          errorBody?.message ??
          'Falha ao atualizar membro do comitê legitimador.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return { success: true }
}
