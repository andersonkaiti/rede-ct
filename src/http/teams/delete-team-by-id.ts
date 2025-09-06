'use server'

import { api } from '@http/api-client'
import { revalidatePath } from 'next/cache'

export async function deleteTeamById(id: string) {
  await api.delete(`team/${id}`)

  revalidatePath('/area-restrita/equipe-de-gestao')
}
