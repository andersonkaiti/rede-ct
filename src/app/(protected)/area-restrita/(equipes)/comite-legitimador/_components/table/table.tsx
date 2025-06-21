"use client";

import { DataTable } from "@components/ui/data-table";

import { useTeam } from "../../../_hooks/use-team.hook";
import { legitimatorCommitteeTableColumns } from "./legitimator-committee-table-columns";
import { LoadingSkeleton } from "./loading-skeleton";

const TEAM_TYPE = "comite-legitimador";

export function Table() {
  const {
    data: team,
    isLoading,
    handleRemoveMember,
  } = useTeam({
    type: TEAM_TYPE,
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <DataTable
      columns={legitimatorCommitteeTableColumns}
      data={team[0].team_members}
      handleRemove={handleRemoveMember}
    />
  );
}
