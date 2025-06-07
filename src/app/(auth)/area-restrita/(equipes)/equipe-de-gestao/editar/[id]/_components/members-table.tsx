import { Button } from "@components/ui/button";
import * as Table from "@components/ui/table";
import { Trash } from "lucide-react";
import { ITeam, ITeamMember } from "types/team";

export interface IMembersTableProps {
  team: ITeam;
  handleRemoveMember: (id: ITeamMember["id"]) => void;
}

export function MembersTable({ team, handleRemoveMember }: IMembersTableProps) {
  console.log(team);

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Nome</Table.Head>
          <Table.Head>Cargo</Table.Head>
          <Table.Head>ID</Table.Head>
          <Table.Head>Ações</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {team?.team_members?.map((member) => (
          <Table.Row key={member.user_id}>
            <Table.Cell>{member.name}</Table.Cell>
            <Table.Cell>{member.role}</Table.Cell>
            <Table.Cell>{member.user_id}</Table.Cell>
            <Table.Cell>
              <Button
                onClick={() => handleRemoveMember(member.user_id)}
                className="cursor-pointer"
                type="button"
              >
                <Trash />
                Remover
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
