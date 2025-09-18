import { zodResolver } from '@hookform/resolvers/zod'
import { getTeams } from '@http/teams/get-teams'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import {
  createLegitimatorCommitteeTeamMemberAction,
  type LegitimatorCommitteeTeamMemberActionResult,
} from '../../actions'
import type { ILegitimatorCommittee } from '../_table/legitimator-committee-table-columns'

export const legitimatorCommitteeTeamMemberSchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  role: z.string().trim().min(1, 'Cargo é obrigatório'),
  description: z.string().trim().min(1, 'Descrição é obrigatória'),
})

export type CreateLegitimatorCommitteeTeamMemberInput = z.infer<
  typeof legitimatorCommitteeTeamMemberSchema
>

const TEAM_TYPE = 'comite-legitimador'

export function useCreateLegitimatorCommitteeTeamMember(
  setIsOpen: (isOpen: boolean) => void
) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const QUERY_KEY = ['team', TEAM_TYPE]

  const { data: teamId } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getTeams<ILegitimatorCommittee[]>({ type: TEAM_TYPE }),
    select: (data: ILegitimatorCommittee[]) => data[0].id,
  })

  const form = useForm({
    resolver: zodResolver(legitimatorCommitteeTeamMemberSchema),
    values: {
      userId: '',
      description: '',
      role: '',
    },
  })

  async function onSubmit(values: CreateLegitimatorCommitteeTeamMemberInput) {
    const result: LegitimatorCommitteeTeamMemberActionResult =
      await createLegitimatorCommitteeTeamMemberAction({
        ...values,
        teamId,
      })

    if (result.success) {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      })

      toast.success('Membro cadastrado com sucesso!')

      setIsOpen(false)

      form.reset()

      return
    }

    setServerError(result.message)
  }

  return {
    form,
    serverError,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
  }
}
