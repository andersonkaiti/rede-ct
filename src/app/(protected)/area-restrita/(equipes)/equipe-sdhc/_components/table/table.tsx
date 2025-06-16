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

const TEAM_TYPE = "equipe-sdhc";

export function EquipeSDHCTable() {
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Cargo</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teams?.[0]?.team_members?.map((member) => (
          <TableRowComponent
            key={`${member.id}-${member.user_id}`}
            member={member}
            handleRemoveMember={() => handleRemoveMember(member.id as string)}
          />
        ))}
      </TableBody>
    </Table>
  );
}
