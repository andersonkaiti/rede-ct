import { Button } from "@components/ui/button";
import * as Dialog from "@components/ui/dialog";
import { TrashIcon } from "lucide-react";
import { ITeamMember } from "types/team";

interface ITableRowProps {
  member: ITeamMember;
  handleRemoveMember: (id: string) => void;
}

export function DeleteDialog({ member, handleRemoveMember }: ITableRowProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button size="icon" variant="ghost" className="w-fit p-2">
          <TrashIcon className="h-4 w-4" />
          Remover
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Tem certeza que deseja remover o membro?</Dialog.Title>
          <Dialog.Description>
            Essa ação não pode ser desfeita.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="outline">Cancelar</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button onClick={() => handleRemoveMember(member.id as string)}>
              Remover
            </Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
