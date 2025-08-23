'use server'

import 'server-only'

import { api } from '@adapters/index'
import { BASE_URL } from '@config/index'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const sdhcTeamSchema = z.object({
  user_id: z.string().min(1, { message: 'Membro é obrigatório' }),
  role: z.string().trim().min(1, { message: 'Cargo é obrigatório' }),
  description: z.string().trim().min(1, { message: 'Descrição é obrigatória' }),
})

export interface IActionState {
  success: boolean
  errors: z.inferFlattenedErrors<typeof sdhcTeamSchema>['fieldErrors'] | null
  payload: FormData | null
}

interface ICreateSDHCTeamMemberProps {
  team: {
    id: string
  }
}

const TEAM_TYPE = 'equipe-sdhc'
const TEAM_NAME = 'Equipe SDHC'

export async function createSDHCTeamMemberAction(
  props: ICreateSDHCTeamMemberProps,
  _: unknown,
  formData: FormData
) {
  try {
    const { success, data, error } = sdhcTeamSchema.safeParse(
      Object.fromEntries(formData)
    )

    if (!success) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        payload: formData,
      } as IActionState
    }

    const teamAlreadyExists = !!props.team.id

    if (!teamAlreadyExists) {
      await api.post(`${BASE_URL}/team`, {
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
      } as IActionState
    }

    await api.post(`${BASE_URL}/team/${props.team.id}/member`, {
      ...props,
      member: data,
    })

    revalidatePath(`/area-restrita/${TEAM_TYPE}`)

    return {
      success: true,
      errors: null,
      payload: null,
    } as IActionState
  } catch {
    return {
      success: false,
      errors: null,
      payload: formData,
    } as IActionState
  }
}

interface IUpdatedSDHCTeamMember {
  member: {
    id: string
  }
}

export async function updateSDHCTeamMemberAction(
  props: IUpdatedSDHCTeamMember,
  _: unknown,
  formData: FormData
) {
  try {
    const { success, data, error } = sdhcTeamSchema.safeParse(
      Object.fromEntries(formData)
    )

    if (!success) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        payload: formData,
      } as IActionState
    }

    await api.put(`${BASE_URL}/team/member/${props.member.id}`, {
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
    } as IActionState
  } catch {
    return {
      success: false,
      errors: null,
      payload: formData,
    } as IActionState
  }
}
