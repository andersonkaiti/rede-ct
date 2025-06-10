"use client";

import * as Table from "@components/ui/table";

import { useTeam } from "../../../_hooks/use-team.hook";
import { LoadingSkeleton } from "./loading-skeleton";
import { TableRow } from "./table-row";

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
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Nome</Table.Head>
          <Table.Head>Cargo</Table.Head>
          <Table.Head>Ações</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {teams?.[0]?.team_members?.map((member) => (
          <TableRow
            key={`${member.id}-${member.user_id}`}
            member={member}
            handleRemoveMember={() => handleRemoveMember(member.id as string)}
          />
        ))}
      </Table.Body>
    </Table.Root>
  );
}
