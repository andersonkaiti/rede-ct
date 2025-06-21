"use client";

import { deleteTeamMemberById } from "@services/teams/delete-team-member-by-id";
import { getTeams } from "@services/teams/teams";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ITeam, ITeamMember } from "types/team";

interface IUseTeamProps {
  type: string;
}

export function useTeam({ type }: IUseTeamProps) {
  const queryClient = useQueryClient();

  const QUERY_KEY = ["team", type];

  const result = useQuery<ITeam[]>({
    queryKey: QUERY_KEY,
    queryFn: () => getTeams<ITeam[]>(type),
  });

  async function handleRemoveMember({ id }: ITeamMember) {
    if (!id) {
      throw new Error("O id do membro é obrigatório");
    }

    await deleteTeamMemberById(id);

    queryClient.setQueryData(QUERY_KEY, (old: ITeam[]) =>
      old.map((oldTeam) => ({
        ...oldTeam,
        team_members:
          oldTeam.team_members.filter((member) => member.id !== id) || [],
      })),
    );

    toast.success("Membro removido com sucesso!");
  }

  return {
    ...result,
    handleRemoveMember,
  };
}
