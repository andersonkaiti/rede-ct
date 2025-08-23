'use server'

import 'server-only'

import { api } from '@adapters/index'
import { BASE_URL } from '@config/index'
import type { ITeamMember } from 'types/team'
import { z } from 'zod'

const legitimatorCommitteeSchema = z.object({
  name: z.string().trim().min(1, 'O nome da equipe é obrigatório.').trim(),
  members: z
    .array(
      z.object({
        role: z.string().trim().min(1, { message: 'Cargo é obrigatório.' }),
        user: z.object({
          id: z.string(),
          first_name: z
            .string()
            .trim()
            .min(1, { message: 'Nome é obrigatório.' })
            .trim(),
        }),
      })
    )
    .min(1, 'Membros são obrigatórios.'),
})

export interface IActionState {
  success: boolean
  errors?:
    | z.inferFlattenedErrors<typeof legitimatorCommitteeSchema>['fieldErrors']
    | null
  payload: FormData | null
}

const TEAM_TYPE = 'equipe-de-gestao'

export async function registerManagementTeam(
  members: ITeamMember[],
  _: unknown,
  formData: FormData
) {
  const { success, data, error } = legitimatorCommitteeSchema.safeParse({
    name: formData.get('name'),
    members,
  })

  if (!success) {
    return {
      success: false,
      errors: error.flatten().fieldErrors,
      payload: formData,
    } as IActionState
  }

  await api.post(`${BASE_URL}/team`, {
    type: TEAM_TYPE,
    ...data,
  })

  return {
    success: true,
    errors: null,
    payload: null,
  } as IActionState
}

interface IUpdatedManagementTeam {
  members: ITeamMember[]
  id: string
}

export async function updateManagementTeam(
  team: IUpdatedManagementTeam,
  _: unknown,
  formData: FormData
) {
  const { success, data, error } = legitimatorCommitteeSchema.safeParse({
    name: formData.get('name'),
    members: team.members,
  })

  if (!success) {
    return {
      success: false,
      errors: error?.flatten().fieldErrors,
      payload: formData,
    } as IActionState
  }

  await api.put(`${BASE_URL}/team/${team.id}`, data)

  return {
    success: true,
    errors: null,
    payload: null,
  } as IActionState
}
