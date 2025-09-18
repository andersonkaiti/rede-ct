import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { ITeamMember } from 'types/team'
import z from 'zod'
import {
  createManagementTeamAction,
  type ManagementTeamActionResult,
} from '../actions'

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

export type CreateManagementTeamInput = z.infer<typeof managementTeamSchema>

export function useCreateTeam() {
  const router = useRouter()

  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<CreateManagementTeamInput>({
    resolver: zodResolver(managementTeamSchema),
    values: {
      name: '',
      members: [],
    },
    mode: 'onChange',
  })

  const [members, setMembers] = useState<ITeamMember[]>([])

  const membersForm = useFieldArray({
    control: form.control,
    name: 'members',
  })

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

  async function onSubmit(values: CreateManagementTeamInput) {
    const result: ManagementTeamActionResult =
      await createManagementTeamAction(values)

    if (result.success) {
      toast.success('Equipe cadastrada com sucesso!')

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
  }
}
