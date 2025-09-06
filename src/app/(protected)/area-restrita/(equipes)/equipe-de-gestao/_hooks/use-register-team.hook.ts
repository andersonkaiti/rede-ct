import { redirect } from 'next/navigation'
import { useActionState, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import type { ITeamMember } from 'types/team'
import { createManagementTeamAction, type IActionState } from '../actions'

export function useCreateTeam() {
  const [team, setTeam] = useState<ITeamMember[]>([])
  const [selectedMember, setSelectedMember] = useState<ITeamMember | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleIncludeTeamMember() {
    if (!(selectedMember && inputRef.current)) {
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

    toast.success('Membro adicionado com sucesso!')

    setTeam((prevTeam) => [...prevTeam, newMember])
  }

  function handleRemoveMember(teamId: string) {
    setTeam((prevTeam) =>
      prevTeam.filter((teamMember) => teamMember.id !== teamId)
    )

    toast.success('Usuário removido com sucesso!')
  }

  const [{ payload, success, errors, message }, formAction, isLoading] =
    useActionState<IActionState, FormData>(
      createManagementTeamAction.bind(null, team),
      {} as IActionState
    )

  useEffect(() => {
    if (success) {
      toast.success('Equipe cadastrada com sucesso!')

      redirect('/area-restrita/equipe-de-gestao')
    }
  }, [success])

  return {
    team,
    setSelectedMember,
    inputRef,
    handleIncludeTeamMember,
    handleRemoveMember,
    formAction,
    isLoading,
    errors,
    payload,
    message,
  }
}
