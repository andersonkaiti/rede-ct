"use client";

import * as Table from "@components/ui/table";

import { useManagementTeam } from "../../../equipe-de-gestao/_hooks/use-management-team.hook";
import { LoadingSkeleton } from "./loading-skeleton";

const TEAM_TYPE = "equipe-sdhc";

export function EquipeSDHCTable() {
  const { teams, isLoading } = useManagementTeam({
    type: TEAM_TYPE,
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  console.log(teams);

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Nome</Table.Head>
          <Table.Head>Ações</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Equipe SDHC 1</Table.Cell>
          <Table.Cell>Ações</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
