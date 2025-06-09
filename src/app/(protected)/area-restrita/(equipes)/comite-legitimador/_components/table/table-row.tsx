import { Button } from "@components/ui/button";
import * as Dialog from "@components/ui/dialog";
import * as Table from "@components/ui/table";
import { EditIcon } from "lucide-react";
import { useState } from "react";
import { ITeamMember } from "types/team";

import { UpdateComiteLegitimadorForm } from "../update-member/update-team-form";
import { DeleteDialog } from "./delete-dialog";

interface ITableRowProps {
  member: ITeamMember;
  handleRemoveMember: (id: string) => void;
}
export function TableRow({ member, handleRemoveMember }: ITableRowProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Table.Row>
      <Table.Cell>
        {member.user?.first_name} {member.user?.last_name}
      </Table.Cell>
      <Table.Cell>{member.role}</Table.Cell>
      <Table.Cell>
        {member.description && member.description.length > 30
          ? `${member.description?.slice(0, 30)}...`
          : member.description}
      </Table.Cell>
      <Table.Cell className="space-x-2">
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger asChild>
            <Button size="icon" variant="ghost" className="w-fit p-2">
              <EditIcon className="size-4" />
              Editar
            </Button>
          </Dialog.Trigger>
          <UpdateComiteLegitimadorForm setIsOpen={setIsOpen} member={member} />
        </Dialog.Root>
        <DeleteDialog member={member} handleRemoveMember={handleRemoveMember} />
      </Table.Cell>
    </Table.Row>
  );
}
