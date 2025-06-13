"use client";

import { updateManagementTeam } from "@actions/management-team/update";
import { getTeam } from "@services/teams/team";
import { useQuery } from "@tanstack/react-query";
import { redirect, useParams } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { ITeam, ITeamMember } from "types/team";

export function useUpdateTeam() {
  const { id } = useParams();

  const { data, isLoading: isTeamLoading } = useQuery<ITeam>({
    queryKey: ["team", id],
    queryFn: getTeam,
  });

  const [team, setTeam] = useState<ITeam>({} as ITeam);

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

    const alreadyHas = !!team.team_members.find(
      (member) => member.user_id === newMember.user_id,
    );

    if (alreadyHas) {
      toast.warning("Esse membro já existe!");

      return;
    }

    toast.success("Membro adicionado com sucesso!");

    setTeam((prev) => ({
      ...prev,
      team_members: [...prev.team_members, newMember],
    }));
  }

  function handleRemoveMember(id: ITeamMember["id"]) {
    setTeam(({ team_members, ...rest }) => ({
      ...rest,
      team_members: team_members.filter(
        (teamMember: ITeamMember) => teamMember.user_id !== id,
      ),
    }));

    toast.success("Usuário removido com sucesso!");
  }

  useEffect(() => {
    if (!isTeamLoading) {
      setTeam(data as ITeam);
    }
  }, [data, isTeamLoading]);

  const [state, formAction, isLoading] = useActionState(
    updateManagementTeam.bind(null, {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      team: team.team_members?.map(({ user, ...member }) => member),
      id: team.id,
    }),
    null,
  );

  useEffect(() => {
    if (state && "success" in state) {
      toast.success("Equipe atualizada com sucesso!");

      redirect("/area-restrita/equipe-de-gestao");
    }
  }, [state]);

  return {
    team,
    isTeamLoading,
    setSelectedMember,
    inputRef,
    handleAddMember,
    handleRemoveMember,
    state,
    formAction,
    isLoading,
  };
}
