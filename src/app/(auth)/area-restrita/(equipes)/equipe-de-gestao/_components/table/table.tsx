"use client";

import { useTeams } from "@/app/(auth)/area-restrita/(equipes)/equipe-de-gestao/_hooks/use-teams.hook";
import * as Table from "@components/ui/table";
import { LoadingSkeleton } from "./loading-skeleton";
import { TeamRow } from "./team-row";

const TEAM_TYPE = "equipe-de-gestao";

export default function EquipeDeGestaoTable() {
  const { teams, isLoading, handleRemoveTeam } = useTeams(TEAM_TYPE);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Nome</Table.Head>
          <Table.Head>Ações</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {teams?.map((team) => (
          <TeamRow
            key={team.id}
            team={team}
            handleRemoveTeam={handleRemoveTeam}
          />
        ))}
      </Table.Body>
    </Table.Root>
  );
}
