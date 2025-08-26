import { getTeam } from '@http/teams/get-team'
import { useQuery } from '@tanstack/react-query'
import { redirect, useParams } from 'next/navigation'
import { useActionState, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import type { ITeam, ITeamMember } from 'types/team'
import { type IActionState, updateManagementTeam } from '../actions'

export function useUpdateTeam() {
  const { id } = useParams()

  const { data, isLoading: isTeamLoading } = useQuery<ITeam>({
    queryKey: ['team', id],
    queryFn: getTeam,
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

    const alreadyExists = !!team.find((member) => member.id === newMember.id)

    if (alreadyExists) {
      toast.warning('Esse membro já existe!')

      return
    }

    setTeam((prevTeam) => [...prevTeam, newMember])

    toast.success('Membro adicionado com sucesso!')
  }

  function handleRemoveMember(member: ITeamMember) {
    setTeam((prevTeam) =>
      prevTeam.filter(
        (teamMember: ITeamMember) => teamMember.user?.id !== member.user?.id
      )
    )

    toast.success('Usuário removido com sucesso!')
  }

  useEffect(() => {
    if (!isTeamLoading && data) {
      setTeam(data.team_members)
    }
  }, [data, isTeamLoading])

  const [{ success, errors }, formAction, isLoading] = useActionState<
    IActionState,
    FormData
  >(
    updateManagementTeam.bind(null, {
      members: team,
      id: data?.id || '',
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
    data,
    team,
    isTeamLoading,
    setSelectedMember,
    inputRef,
    handleIncludeTeamMember,
    handleRemoveMember,
    errors,
    formAction,
    isLoading,
  }
}
