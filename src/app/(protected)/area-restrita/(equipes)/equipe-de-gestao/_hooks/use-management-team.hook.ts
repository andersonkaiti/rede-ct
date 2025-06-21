"use client";

import { deleteTeamById } from "@services/teams/delete-team-by-id";
import { getTeams } from "@services/teams/teams";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { startTransition, useOptimistic } from "react";
import { toast } from "sonner";
import { ITeam } from "types/team";

interface IUseManagementTeamProps {
  type: string;
}

export function useManagementTeam({ type }: IUseManagementTeamProps) {
  const queryClient = useQueryClient();

  const QUERY_KEY = ["team", type];

  const { data: teams, isLoading } = useQuery<ITeam[]>({
    queryKey: QUERY_KEY,
    queryFn: () => getTeams(type),
  });

  const [optimisticTeams, updateOptimisticTeams] = useOptimistic(
    teams || [],
    (prevTeams: ITeam[], teamId: ITeam["id"]) =>
      prevTeams.filter((team) => team.id !== teamId),
  );

  async function handleRemoveTeam(data: unknown) {
    const teamId = data as ITeam["id"];

    startTransition(() => {
      updateOptimisticTeams(teamId);
    });

    await deleteTeamById(teamId);

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    });

    toast.success("Equipe removida com sucesso!");
  }

  return {
    teams: optimisticTeams,
    isLoading,
    handleRemoveTeam,
  };
}
