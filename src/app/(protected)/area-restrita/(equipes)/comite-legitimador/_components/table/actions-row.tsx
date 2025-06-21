import { Button } from "@components/ui/button";
import { Dialog, DialogTrigger } from "@components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { EditIcon, Ellipsis } from "lucide-react";
import { useState } from "react";
import { ITeamMember } from "types/team";

import { DeleteDialog } from "@/app/(protected)/area-restrita/_components/delete-dialog";

import { UpdateMemberForm } from "../update-member/update-member-form";

interface IActionsRowProps {
  data: ITeamMember;
  handleRemove: () => void;
}

export function ActionsRow({ data: member, handleRemove }: IActionsRowProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild className="p-0">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="flex w-full justify-between p-3 text-xs"
              >
                Editar
                <EditIcon className="size-4 text-black" />
              </Button>
            </DialogTrigger>
            <UpdateMemberForm setIsOpen={setIsOpen} member={member} />
          </Dialog>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DeleteDialog handleRemove={handleRemove} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
