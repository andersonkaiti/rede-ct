"use client";

import { startTransition, useOptimistic } from "react";
import { deleteTeamById } from "@services/teams/delete-team-by-id";
import { getTeams } from "@services/teams/teams";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ITeam } from "types/team";

export function useTeams(type: string) {
  const queryClient = useQueryClient();

  const QUERY_KEY = ["team", type];

  const { data: teams, isLoading } = useQuery<ITeam[]>({
    queryKey: QUERY_KEY,
    queryFn: getTeams,
  });

  const [optimisticTeams, updateOptimisticTeams] = useOptimistic(
    teams || [],
    (prevTeams: ITeam[], teamId: ITeam["id"]) =>
      prevTeams.filter((team) => team.id !== teamId),
  );

  async function handleRemoveTeam(teamId: ITeam["id"]) {
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
