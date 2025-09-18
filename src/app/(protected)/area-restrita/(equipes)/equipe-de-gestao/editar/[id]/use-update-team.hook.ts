import { zodResolver } from '@hookform/resolvers/zod'
import { getTeam } from '@http/teams/get-team'
import { useQuery } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { ITeam, ITeamMember } from 'types/team'
import z from 'zod'
import {
  type ManagementTeamActionResult,
  updateManagementTeamAction,
} from '../../actions'

export const managementTeamSchema = z.object({
  name: z.string().trim().min(1, 'O nome da equipe é obrigatório.').trim(),
  members: z
    .array(
      z.object({
        role: z.string().trim().min(1, 'Cargo é obrigatório.'),
        id: z.uuid().optional(),
        user: z.object({
          id: z.string(),
        }),
      })
    )
    .min(1, 'Membros são obrigatórios.'),
})

export type UpdateManagementTeamInput = z.infer<typeof managementTeamSchema>

export function useUpdateTeam() {
  const { id } = useParams<{ id: string }>()

  const router = useRouter()

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: incomingTeam, isLoading: isTeamLoading } = useQuery<ITeam>({
    queryKey: ['team', id],
    queryFn: () => getTeam(id),
  })

  const [members, setMembers] = useState<ITeamMember[]>([])

  const form = useForm<UpdateManagementTeamInput>({
    resolver: zodResolver(managementTeamSchema),
    values: {
      name: '',
      members: [],
    },
    mode: 'onChange',
  })

  const membersForm = useFieldArray({
    control: form.control,
    name: 'members',
  })

  useEffect(() => {
    if (!isTeamLoading && incomingTeam) {
      form.reset({
        ...incomingTeam,
      })

      setMembers(incomingTeam.members)
    }
  }, [incomingTeam, form, isTeamLoading])

  function handleIncludeMember(member: ITeamMember) {
    membersForm.append(member)

    setMembers((prevMembers) => [...prevMembers, member])

    toast.success('Membro adicionado com sucesso!')
  }

  function handleRemoveMember(memberId: string) {
    const memberIndex = members.findIndex((member) => member.id === memberId)

    membersForm.remove(memberIndex)

    setMembers((prevMembers) => prevMembers.filter((_, index) => index))

    toast.success('Usuário removido com sucesso!')
  }

  async function onSubmit(values: UpdateManagementTeamInput) {
    const result: ManagementTeamActionResult = await updateManagementTeamAction(
      {
        ...values,
        id: incomingTeam?.id ?? '',
      }
    )

    if (result.success) {
      toast.success('Equipe atualizada com sucesso!')

      router.push('/area-restrita/equipe-de-gestao')

      return
    }

    setServerError(result.message)
  }

  return {
    form,
    serverError,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
    handleIncludeMember,
    handleRemoveMember,
    members,
    isTeamLoading,
  }
}
