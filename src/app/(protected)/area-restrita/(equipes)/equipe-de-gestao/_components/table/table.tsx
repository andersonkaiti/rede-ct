"use client";

import { DataTable } from "@components/ui/data-table";
import { ITeam } from "types/team";

import { useManagementTeam } from "../../_hooks/use-management-team.hook";
import { LoadingSkeleton } from "./loading-skeleton";
import { managementTeamTableColumns } from "./management-team-table-columns";

const TEAM_TYPE = "equipe-de-gestao";

export default function Table() {
  const {
    data: teams,
    isLoading,
    handleRemoveTeam,
  } = useManagementTeam({
    type: TEAM_TYPE,
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <DataTable<ITeam, unknown>
      columns={managementTeamTableColumns}
      data={teams}
      handleRemove={handleRemoveTeam}
    />
  );
}
