import { zodResolver } from '@hookform/resolvers/zod'
import { getManagementTeamById } from '@http/teams/management-team/get-management-team-by-id'
import { updateManagementTeam } from '@http/teams/management-team/update-management-team'
import { useQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

interface ITeamMember {
  id: string
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

export type UpdateManagementTeamInput = z.infer<typeof managementTeamSchema>

export function useUpdateTeam() {
  const { id: teamId } = useParams<{ id: string }>()
  const router = useRouter()

  const [serverError, setServerError] = useState<string | null>(null)

  const { data: incomingTeam, isLoading: isTeamLoading } = useQuery({
    queryKey: ['team', teamId],
    queryFn: async () => await getManagementTeamById(teamId),
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
      const formMembers = incomingTeam.members.map((member) => ({
        userId: member.user.id,
        role: member.role,
      }))

      form.reset({
        name: incomingTeam.name,
        members: formMembers,
      })

      setMembers(
        incomingTeam.members.map((member) => ({
          ...member,
          user: {
            ...member.user,
            role: member.user.role as 'ADMIN' | 'USER',
          },
        })),
      )
    }
  }, [incomingTeam, form, isTeamLoading])

  function handleIncludeMember(member: ITeamMember) {
    membersForm.append({ userId: member.user.id, role: member.role })

    setMembers((prevMembers) => [...prevMembers, member])

    toast.success('Membro adicionado com sucesso!')
  }

  function handleRemoveMember(id: string) {
    membersForm.remove(Number(id))

    setMembers((prevMembers) => prevMembers.filter((_, i) => i !== Number(id)))

    toast.success('Usuário removido com sucesso!')
  }

  const submit = form.handleSubmit(
    async (values: UpdateManagementTeamInput) => {
      try {
        await updateManagementTeam({
          id: teamId,
          name: values.name,
          members: values.members.map((member) => ({
            userId: member.userId,
            role: member.role,
          })),
        })

        toast.success('Equipe atualizada com sucesso!')

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
    isSubmitting: form.formState.isSubmitting,
    submit,
    handleIncludeMember,
    handleRemoveMember,
    members,
    isTeamLoading,
  }
}
