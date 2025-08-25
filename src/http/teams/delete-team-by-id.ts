'use server'

import { api } from '@adapters/index'
import { revalidatePath } from 'next/cache'

export async function deleteTeamById(id: string) {
  await api.delete(`/team/${id}`)

  revalidatePath('/area-restrita/equipe-de-gestao')
}
