"use client";

import * as Table from "@components/ui/table";

import { useTeam } from "../../../_hooks/use-team.hook";
import { LoadingSkeleton } from "./loading-skeleton";
import { TableRow } from "./table-row";

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
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Nome</Table.Head>
          <Table.Head>Cargo</Table.Head>
          <Table.Head>Descrição</Table.Head>
          <Table.Head>Ações</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {team?.[0]?.team_members?.map((member) => (
          <TableRow
            key={`${member.user?.id}-${member.role}`}
            member={member}
            handleRemoveMember={handleRemoveMember}
          />
        ))}
      </Table.Body>
    </Table.Root>
  );
}
