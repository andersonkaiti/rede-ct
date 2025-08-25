'use server'

import 'server-only'

import { api } from '@adapters/index'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const legitimatorCommitteeTeamMemberSchema = z.object({
  user_id: z.string().min(1, { message: 'Membro é obrigatório' }),
  role: z.string().trim().min(1, { message: 'Cargo é obrigatório' }),
  description: z.string().trim().min(1, { message: 'Descrição é obrigatória' }),
})

export interface IActionState {
  success: boolean
  errors:
    | z.inferFlattenedErrors<
        typeof legitimatorCommitteeTeamMemberSchema
      >['fieldErrors']
    | null
  payload: FormData | null
}

interface ICreateLegitimatorCommitteeTeamMemberProps {
  team: {
    id: string
  }
}

const TEAM_TYPE = 'comite-legitimador'
const TEAM_NAME = 'Comitê Legitimador'

export async function createLegitimatorCommitteeTeamMemberAction(
  props: ICreateLegitimatorCommitteeTeamMemberProps,
  _: unknown,
  formData: FormData
): Promise<IActionState> {
  try {
    const { success, data, error } =
      legitimatorCommitteeTeamMemberSchema.safeParse(
        Object.fromEntries(formData)
      )

    if (!success) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        payload: formData,
      }
    }

    const teamAlreadyExists = !!props.team.id

    if (!teamAlreadyExists) {
      await api.post('/team', {
        ...props,
        type: TEAM_TYPE,
        name: TEAM_NAME,
        members: [
          {
            role: data.role,
            user: {
              id: data.user_id,
              description: data.description,
            },
          },
        ],
      })

      revalidatePath(`/area-restrita/${TEAM_TYPE}`)

      return {
        success: true,
        errors: null,
        payload: null,
      }
    }

    await api.post(`/team/${props.team.id}/member`, {
      ...props,
      member: data,
    })

    revalidatePath(`/area-restrita/${TEAM_TYPE}`)

    return {
      success: true,
      errors: null,
      payload: null,
    }
  } catch {
    return {
      success: false,
      errors: null,
      payload: formData,
    }
  }
}

interface IUpdateTeamMemberProps {
  member: {
    id: string
  }
}

export async function updateLegitimatorCommitteeTeamMemberAction(
  props: IUpdateTeamMemberProps,
  _: unknown,
  formData: FormData
): Promise<IActionState> {
  try {
    const { success, data, error } =
      legitimatorCommitteeTeamMemberSchema.safeParse(
        Object.fromEntries(formData)
      )

    if (!success) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        payload: formData,
      }
    }

    await api.put(`/team/member/${props.member.id}`, {
      member: {
        ...data,
        id: props.member.id,
      },
    })

    revalidatePath(`/area-restrita/${TEAM_TYPE}`)

    return {
      success: true,
      errors: null,
      payload: null,
    }
  } catch {
    return {
      success: false,
      errors: null,
      payload: formData,
    }
  }
}
