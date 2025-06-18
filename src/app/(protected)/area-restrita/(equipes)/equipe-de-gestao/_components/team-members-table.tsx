import { Button } from "@components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { Trash } from "lucide-react";
import { ITeamMember } from "types/team";

interface ITeamMembersTableProps {
  teamMembers: ITeamMember[];
  handleRemoveMember: (id: ITeamMember["id"]) => void;
}

export function TeamMembersTable({
  teamMembers,
  handleRemoveMember,
}: ITeamMembersTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Cargo</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teamMembers?.map((member) => (
          <TableRow key={`${member.user_id}-${member.role}`}>
            <TableCell>
              {member.user?.first_name} {member.user?.last_name}
            </TableCell>
            <TableCell>{member.role}</TableCell>
            <TableCell>{member.id}</TableCell>
            <TableCell>
              <Button
                type="button"
                onClick={() => handleRemoveMember(member.user_id)}
                className="cursor-pointer"
              >
                <Trash />
                Remover
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
