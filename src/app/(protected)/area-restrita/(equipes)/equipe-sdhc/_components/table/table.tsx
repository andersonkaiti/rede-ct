"use client";

import { DataTable } from "@components/ui/data-table";
import { ITeamMember } from "types/team";

import { useTeam } from "../../../_hooks/use-team.hook";
import { LoadingSkeleton } from "./loading-skeleton";
import { sdhcTeamTableColumns } from "./sdhc-team-table-columns";

const TEAM_TYPE = "equipe-sdhc";

export function Table() {
  const {
    data: teams,
    isLoading,
    handleRemoveMember,
  } = useTeam({
    type: TEAM_TYPE,
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <DataTable<ITeamMember, unknown>
      columns={sdhcTeamTableColumns}
      data={teams?.[0].team_members}
      handleRemove={handleRemoveMember}
    />
  );
}
