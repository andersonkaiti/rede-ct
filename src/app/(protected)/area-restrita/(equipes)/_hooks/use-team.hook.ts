import { deleteTeamMemberById } from "@services/teams/delete-team-member-by-id";
import { getTeams } from "@services/teams/teams";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { startTransition, useOptimistic } from "react";
import { toast } from "sonner";
import { ITeam } from "types/team";

interface IUseTeamProps {
  type: string;
}

export function useTeam({ type }: IUseTeamProps) {
  const queryClient = useQueryClient();

  const QUERY_KEY = ["team", type];

  const { data, ...rest } = useQuery<ITeam[]>({
    queryKey: QUERY_KEY,
    queryFn: () => getTeams<ITeam[]>(type),
  });

  const [optimisticTeams, updateOptimisticTeams] = useOptimistic(
    data || [],
    (prevTeams, teamMemberId) =>
      prevTeams.map((team: ITeam) => ({
        ...team,
        team_members: team.team_members.filter(
          (member) => member.id !== teamMemberId,
        ),
      })),
  );

  async function handleRemoveMember(data: unknown) {
    const { id } = data as ITeam;

    startTransition(() => {
      updateOptimisticTeams(id);
    });

    await deleteTeamMemberById(id);

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    });

    toast.success("Membro removido com sucesso!");
  }

  return {
    data: optimisticTeams,
    ...rest,
    handleRemoveMember,
  };
}
