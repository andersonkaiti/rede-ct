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

interface IActionsRowProps {
  data: ITeamMember;
  handleRemove: () => void;
  form: React.ComponentType<{
    setIsOpen: (isOpen: boolean) => void;
    data: ITeamMember;
  }>;
}

export function ActionsRow({
  data,
  handleRemove,
  form: Form,
}: IActionsRowProps) {
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
            <Form data={data} setIsOpen={setIsOpen} />
          </Dialog>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DeleteDialog handleRemove={handleRemove} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
