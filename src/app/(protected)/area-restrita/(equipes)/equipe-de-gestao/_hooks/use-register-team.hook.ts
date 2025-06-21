"use client";

import { registerManagementTeam } from "@actions/management-team/register";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { ITeamMember } from "types/team";

export function useRegisterTeam() {
  const [team, setTeam] = useState<ITeamMember[]>([]);
  const [selectedMember, setSelectedMember] = useState<ITeamMember | null>(
    null,
  );
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddMember() {
    if (!selectedMember || !inputRef.current) return;

    const newMember: ITeamMember = {
      ...selectedMember,
      role: inputRef.current.value,
    };

    const alreadyExist = !!team.find(
      (member) => member.user_id === newMember.user_id,
    );

    if (alreadyExist) {
      toast.warning("Esse membro já existe!");

      return;
    }

    toast.success("Membro adicionado com sucesso!");

    setTeam((prevTeam) => [...prevTeam, newMember]);
  }

  function handleRemoveMember({ id }: ITeamMember) {
    setTeam((prevTeam) =>
      prevTeam.filter((teamMember) => teamMember.id !== id),
    );

    toast.success("Usuário removido com sucesso!");
  }

  const [state, formAction, isLoading] = useActionState(
    registerManagementTeam.bind(null, team),
    null,
  );

  useEffect(() => {
    if (state && "success" in state) {
      toast.success("Equipe cadastrada com sucesso!");

      redirect("/area-restrita/equipe-de-gestao");
    }
  }, [state]);

  return {
    team,
    setSelectedMember,
    inputRef,
    handleAddMember,
    handleRemoveMember,
    formAction,
    isLoading,
    state,
  };
}
