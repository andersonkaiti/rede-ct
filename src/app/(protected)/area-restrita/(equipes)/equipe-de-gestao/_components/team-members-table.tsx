import { Button } from "@components/ui/button";
import * as Table from "@components/ui/table";
import { Trash } from "lucide-react";
import { ITeamMember } from "types/team";

export interface ITeamMembersTableProps {
  teamMembers: ITeamMember[];
  handleRemoveMember: (id: ITeamMember["id"]) => void;
}

export function TeamMembersTable({
  teamMembers,
  handleRemoveMember,
}: ITeamMembersTableProps) {
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
        {teamMembers?.map((member) => (
          <Table.Row key={`${member.user_id}-${member.role}`}>
            <Table.Cell>
              {member.user?.first_name} {member.user?.last_name}
            </Table.Cell>
            <Table.Cell>{member.role}</Table.Cell>
            <Table.Cell>{member.id}</Table.Cell>
            <Table.Cell>
              <Button
                type="button"
                onClick={() => handleRemoveMember(member.user_id)}
                className="cursor-pointer"
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
