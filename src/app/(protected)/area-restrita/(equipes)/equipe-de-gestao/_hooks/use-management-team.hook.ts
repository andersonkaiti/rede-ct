"use client";

import { deleteTeamById } from "@services/teams/delete-team-by-id";
import { getTeams } from "@services/teams/teams";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ITeam } from "types/team";

interface IUseManagementTeamProps {
  type: string;
}

export function useManagementTeam({ type }: IUseManagementTeamProps) {
  const queryClient = useQueryClient();

  const QUERY_KEY = ["team", type];

  const { isLoading, ...rest } = useQuery<ITeam[]>({
    queryKey: QUERY_KEY,
    queryFn: () => getTeams(type),
  });

  async function handleRemoveTeam({ id }: ITeam) {
    await deleteTeamById(id);

    queryClient.setQueryData(QUERY_KEY, (old: ITeam[] = []) =>
      old.filter((team) => team.id !== id),
    );

    toast.success("Equipe removida com sucesso!");
  }

  return {
    isLoading,
    handleRemoveTeam,
    ...rest,
  };
}
