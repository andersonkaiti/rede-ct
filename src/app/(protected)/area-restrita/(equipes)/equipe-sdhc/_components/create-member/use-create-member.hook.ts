import { zodResolver } from '@hookform/resolvers/zod'
import { getTeams } from '@http/teams/get-teams'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import {
  createSDHCTeamMemberAction,
  type SDHCTeamMemberActionResult,
} from '../../actions'
import type { ISDHCTeam } from '../_table/sdhc-team-table-columns'

export const createSDHCTeamMemberSchema = z.object({
  userId: z.string().min(1, 'Membro é obrigatório'),
  role: z.string().trim().min(1, 'Cargo é obrigatório'),
  description: z.string().trim().min(1, 'Descrição é obrigatória'),
})

export type CreateSDHCTeamMemberInput = z.infer<
  typeof createSDHCTeamMemberSchema
>

const TEAM_TYPE = 'equipe-sdhc'

export function useCreateSDHCTeamMember(setIsOpen: (isOpen: boolean) => void) {
  const queryClient = useQueryClient()

  const [serverError, setServerError] = useState<string | null>(null)

  const QUERY_KEY = ['team', TEAM_TYPE]

  const { data: teamId } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => await getTeams<ISDHCTeam[]>({ type: TEAM_TYPE }),
    select: (data) => data[0].id,
  })

  const form = useForm({
    resolver: zodResolver(createSDHCTeamMemberSchema),
    values: {
      userId: '',
      description: '',
      role: '',
    },
  })

  async function onSubmit(values: CreateSDHCTeamMemberInput) {
    const result: SDHCTeamMemberActionResult = await createSDHCTeamMemberAction(
      {
        ...values,
        id: teamId,
      }
    )

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
