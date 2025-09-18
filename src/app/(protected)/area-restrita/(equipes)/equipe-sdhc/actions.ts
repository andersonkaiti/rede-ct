'use server'

import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import type { CreateSDHCTeamMemberInput } from './_components/create-member/use-create-member.hook'
import type { UpdateSDHCTeamMemberInput } from './_components/update-member/use-update-member.hook'

export type SDHCTeamMemberActionResult =
  | { success: true }
  | { success: false; message: string }

const TEAM_TYPE = 'equipe-sdhc'
const TEAM_NAME = 'Equipe SDHC'

export async function createSDHCTeamMemberAction({
  id,
  ...member
}: CreateSDHCTeamMemberInput & {
  id?: string
}): Promise<SDHCTeamMemberActionResult> {
  try {
    const teamAlreadyExists = !!id

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

    await api.post(`team/${id}/member`, {
      json: {
        id,
        member,
      },
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      return {
        success: false,
        message:
          errorBody?.message ?? 'Falha ao cadastrar membro da equipe SDHC.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return { success: true }
}

export async function updateSDHCTeamMemberAction(
  member: UpdateSDHCTeamMemberInput & {
    id: string
  }
): Promise<SDHCTeamMemberActionResult> {
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
          errorBody?.message ?? 'Falha ao atualizar membro da equipe SDHC.',
      }
    }

    return {
      success: false,
      message: 'Aconteceu um erro inesperado.',
    }
  }

  return { success: true }
}
