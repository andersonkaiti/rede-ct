import { zodResolver } from '@hookform/resolvers/zod'
import { createManagementTeam } from '@http/teams/management-team/create-management-team'
import { HTTPError } from 'ky'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

interface ITeamMember {
  role: string
  userId: string
  user: {
    name: string
    id: string
    role: 'ADMIN' | 'USER'
    createdAt: string
    updatedAt: string
    avatarUrl: string | null
    emailAddress: string
    orcid: string | null
    phone: string | null
    lattesUrl: string | null
  }
}

export const managementTeamSchema = z.object({
  name: z.string().trim().min(1, 'O nome da equipe é obrigatório.').trim(),
  members: z
    .array(
      z.object({
        userId: z.uuid(),
        role: z.string().trim().min(1, 'O cargo é obrigatório.'),
      }),
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

  function handleRemoveMember(id: string) {
    membersForm.remove(Number(id))

    setMembers((prevMembers) => prevMembers.filter((_, i) => i !== Number(id)))

    toast.success('Usuário removido com sucesso!')
  }

  const submit = form.handleSubmit(
    async (values: CreateManagementTeamInput) => {
      try {
        await createManagementTeam(values)

        toast.success('Equipe cadastrada com sucesso!')

        router.push('/area-restrita/equipe-de-gestao')
      } catch (err) {
        if (err instanceof HTTPError) {
          const errorBody = await err.response.json()

          setServerError(errorBody.message)
        }
      }
    },
  )

  return {
    form,
    serverError,
    submit,
    handleIncludeMember,
    handleRemoveMember,
    members,
  }
}
