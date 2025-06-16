"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";

import { useTeam } from "../../../_hooks/use-team.hook";
import { LoadingSkeleton } from "./loading-skeleton";
import { TableRowComponent } from "./table-row";

const TEAM_TYPE = "comite-legitimador";

export function ComiteLegitimadorTable() {
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Cargo</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {team?.[0]?.team_members?.map((member) => (
          <TableRowComponent
            key={`${member.id}-${member.user_id}`}
            member={member}
            handleRemoveMember={handleRemoveMember}
          />
        ))}
      </TableBody>
    </Table>
  );
}
