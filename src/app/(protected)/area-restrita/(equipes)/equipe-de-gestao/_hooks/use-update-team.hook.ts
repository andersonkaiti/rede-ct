import { getTeam } from '@http/teams/get-team'
import { useQuery } from '@tanstack/react-query'
import { redirect, useParams } from 'next/navigation'
import { useActionState, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import type { ITeam, ITeamMember } from 'types/team'
import { type IActionState, updateManagementTeamAction } from '../actions'

export function useUpdateTeam() {
  const { id } = useParams<{ id: string }>()

  const { data: incomingTeam, isLoading: isTeamLoading } = useQuery<ITeam>({
    queryKey: ['team', id],
    queryFn: () => getTeam(id),
  })

  const [team, setTeam] = useState<ITeamMember[]>([])
  const [selectedMember, setSelectedMember] = useState<ITeamMember | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleIncludeTeamMember() {
    if (!(selectedMember && inputRef.current && team)) {
      return
    }

    if (!inputRef.current.value) {
      toast.warning('Especifique o cargo!')

      return
    }

    const newMember: ITeamMember = {
      ...selectedMember,
      role: inputRef.current.value,
    }

    setTeam((prevTeam) => [...prevTeam, newMember])

    toast.success('Membro adicionado com sucesso!')
  }

  function handleRemoveMember(memberId: string) {
    setTeam((prevTeam) =>
      prevTeam.filter((teamMember: ITeamMember) => teamMember.id !== memberId)
    )

    toast.success('Usuário removido com sucesso!')
  }

  useEffect(() => {
    if (!isTeamLoading && incomingTeam) {
      setTeam(incomingTeam.members)
    }
  }, [incomingTeam, isTeamLoading])

  const [{ success, errors, message }, formAction, isLoading] = useActionState<
    IActionState,
    FormData
  >(
    updateManagementTeamAction.bind(null, {
      members: team,
      id: incomingTeam?.id || '',
    }),
    {} as IActionState
  )

  useEffect(() => {
    if (success) {
      toast.success('Equipe atualizada com sucesso!')

      redirect('/area-restrita/equipe-de-gestao')
    }
  }, [success])

  return {
    incomingTeam,
    team,
    isTeamLoading,
    setSelectedMember,
    inputRef,
    handleIncludeTeamMember,
    handleRemoveMember,
    errors,
    formAction,
    isLoading,
    message,
  }
}
