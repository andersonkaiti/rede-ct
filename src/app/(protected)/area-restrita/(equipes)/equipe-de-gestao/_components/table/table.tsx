"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";

import { useManagementTeam } from "../../_hooks/use-management-team.hook";
import { LoadingSkeleton } from "./loading-skeleton";
import { TeamRow } from "./team-row";

const TEAM_TYPE = "equipe-de-gestao";

export default function EquipeDeGestaoTable() {
  const { teams, isLoading, handleRemoveTeam } = useManagementTeam({
    type: TEAM_TYPE,
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teams?.map((team) => (
          <TeamRow
            key={team.id}
            team={team}
            handleRemoveTeam={handleRemoveTeam}
          />
        ))}
      </TableBody>
    </Table>
  );
}
