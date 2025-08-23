import { redirect } from 'next/navigation'
import { useActionState, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import type { ITeamMember } from 'types/team'
import { type IActionState, registerManagementTeam } from '../actions'

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

    const alreadyExists = !!team.find(
      (member) => member.user?.id === newMember.user?.id
    )

    if (alreadyExists) {
      toast.warning('Esse membro já existe!')

      return
    }

    toast.success('Membro adicionado com sucesso!')

    setTeam((prevTeam) => [...prevTeam, newMember])
  }

  function handleRemoveMember({ id }: ITeamMember) {
    setTeam((prevTeam) => prevTeam.filter((teamMember) => teamMember.id !== id))

    toast.success('Usuário removido com sucesso!')
  }

  const [{ payload, success, errors }, formAction, isLoading] = useActionState<
    IActionState,
    FormData
  >(registerManagementTeam.bind(null, team), {} as IActionState)

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
  }
}
