import { Button } from "@components/ui/button";
import { Dialog, DialogTrigger } from "@components/ui/dialog";
import { TableCell, TableRow } from "@components/ui/table";
import { EditIcon } from "lucide-react";
import { useState } from "react";
import { ITeamMember } from "types/team";

import { UpdateMemberForm } from "../update-member/update-member-form";
import { DeleteDialog } from "./delete-dialog";

interface ITableRowProps {
  member: ITeamMember;
  handleRemoveMember: (id: string) => void;
}
export function TableRowComponent({
  member,
  handleRemoveMember,
}: ITableRowProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TableRow>
      <TableCell>
        {member.user?.first_name} {member.user?.last_name}
      </TableCell>
      <TableCell>{member.role}</TableCell>
      <TableCell>
        {member.description && member.description.length > 30
          ? `${member.description?.slice(0, 30)}...`
          : member.description}
      </TableCell>
      <TableCell className="space-x-2">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button size="icon" variant="ghost" className="w-fit p-2">
              <EditIcon className="size-4" />
              Editar
            </Button>
          </DialogTrigger>
          <UpdateMemberForm setIsOpen={setIsOpen} member={member} />
        </Dialog>
        <DeleteDialog member={member} handleRemoveMember={handleRemoveMember} />
      </TableCell>
    </TableRow>
  );
}
