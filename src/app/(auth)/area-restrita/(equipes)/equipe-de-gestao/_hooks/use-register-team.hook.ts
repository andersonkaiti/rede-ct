"use client";

import { redirect } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import { registerTeam } from "@actions/team/register";
import { getUsers } from "@services/users";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ITeamMember } from "types/team";
import { IUser } from "types/user";

export type INewTeamMember = Omit<ITeamMember, "created_at" | "updated_at">;

export function useRegisterTeam() {
  const { data: users } = useQuery<IUser[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const [team, setTeam] = useState<INewTeamMember[]>([]);

  const [selectedMember, setSelectedMember] = useState<INewTeamMember | null>(
    null,
  );

  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddMember() {
    if (!selectedMember || !inputRef.current) return;

    const newMember: INewTeamMember = {
      ...selectedMember,
      role: inputRef.current.value,
    };

    const alreadyHas = !!team.find(
      (member) => member.user_id === newMember.user_id,
    );

    if (alreadyHas) {
      toast.warning("Esse membro já existe!");

      return;
    }

    toast.success("Membro adicionado com sucesso!");

    setTeam((prevTeam) => [...prevTeam, newMember]);
  }

  function handleRemoveMember(id: ITeamMember["id"]) {
    setTeam((prevTeam) =>
      prevTeam.filter((teamMember) => teamMember.id !== id),
    );

    toast.success("Usuário removido com sucesso!");
  }

  const [state, formAction, isLoading] = useActionState(
    registerTeam.bind(null, team),
    null,
  );

  useEffect(() => {
    if (state && "success" in state) {
      toast.success("Equipe cadastrada com sucesso!");

      redirect("/area-restrita/equipe-de-gestao");
    }
  }, [state]);

  return {
    users,
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
