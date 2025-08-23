'use server'

import { api } from '@adapters/index'
import { BASE_URL } from '@config/index'
import { revalidatePath } from 'next/cache'

export async function deleteTeamById(id: string) {
  await api.delete(`${BASE_URL}/team/${id}`)

  revalidatePath('/area-restrita/equipe-de-gestao')
}
